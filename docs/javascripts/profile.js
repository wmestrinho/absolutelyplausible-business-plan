/* profile.js — GitHub-style layout injected on every page
   Home page: contribution graph + activity (elements already in index.md)
   All other pages: profile sidebar + tab nav injected dynamically         */

(function () {
  'use strict';

  /* ─── Config ─── */
  const REPO = 'wmestrinho/absolutelyplausible-business-plan';
  const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  const NAV_TABS = [
    { label: 'Overview',  href: '/',           re: /^\/$/ },
    { label: 'Strategy',  href: '/strategy/',  re: /\/strategy/ },
    { label: 'Timeline',  href: '/timeline/',  re: /\/timeline/ },
    { label: 'Identity',  href: '/identity/',  re: /\/identity/ },
    { label: 'Brand',     href: '/brand/',     re: /\/brand/ },
    { label: 'Projects',  href: '/projects/',  re: /\/projects/ },
    { label: 'Clients',   href: '/clients/',   re: /\/clients/ },
  ];

  /* ─── Color scale ─── */
  function getColor(count) {
    if (count === 0) return 'rgb(31,41,55)';
    if (count === 1) return 'rgba(255,109,0,0.25)';
    if (count <= 3) return 'rgba(255,109,0,0.5)';
    if (count <= 5) return 'rgba(255,109,0,0.75)';
    return 'rgb(255,109,0)';
  }

  /* ─── Relative time ─── */
  function relativeTime(iso) {
    const diffDays = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return diffDays + ' days ago';
    const months = Math.floor(diffDays / 30);
    if (diffDays < 365) return months + ' month' + (months > 1 ? 's' : '') + ' ago';
    const years = Math.floor(diffDays / 365);
    return years + ' year' + (years > 1 ? 's' : '') + ' ago';
  }

  /* ─── Fetch commits (paginated, last year) ─── */
  async function fetchCommits() {
    const since = new Date();
    since.setFullYear(since.getFullYear() - 1);
    const sinceISO = since.toISOString();
    let all = [];
    for (let page = 1; page <= 5; page++) {
      try {
        const url = 'https://api.github.com/repos/' + REPO +
          '/commits?per_page=100&since=' + sinceISO + '&page=' + page;
        const res = await fetch(url);
        if (!res.ok) break;
        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) break;
        all = all.concat(data);
        if (data.length < 100) break;
      } catch (_) { break; }
    }
    return all;
  }

  /* ─── Commit → date map ─── */
  function buildMap(commits) {
    const map = {};
    commits.forEach(function (c) {
      const d = c.commit.author.date.slice(0, 10);
      map[d] = (map[d] || 0) + 1;
    });
    return map;
  }

  /* ─── Contribution graph ─── */
  function buildGraph(map) {
    const cellsEl  = document.getElementById('gh-contrib-cells');
    const monthsEl = document.getElementById('gh-contrib-months');
    const totalEl  = document.getElementById('gh-contrib-total');
    if (!cellsEl) return 0;

    const today = new Date();
    today.setHours(23, 59, 59, 0);
    const start = new Date(today);
    start.setDate(start.getDate() - 363);
    start.setDate(start.getDate() - start.getDay()); // back to Sunday
    start.setHours(0, 0, 0, 0);

    const days = [];
    const cur = new Date(start);
    while (cur <= today) { days.push(new Date(cur)); cur.setDate(cur.getDate() + 1); }

    const numWeeks = Math.ceil(days.length / 7);
    const colTpl = 'repeat(' + numWeeks + ', 11px)';

    if (monthsEl) {
      monthsEl.style.gridTemplateColumns = colTpl;
      let lastMonth = -1;
      for (let w = 0; w < numWeeks; w++) {
        const span = document.createElement('span');
        const idx = w * 7;
        if (idx < days.length) {
          const m = days[idx].getMonth();
          if (m !== lastMonth) { span.textContent = MONTH_NAMES[m]; lastMonth = m; }
        }
        monthsEl.appendChild(span);
      }
    }

    cellsEl.style.gridTemplateColumns = colTpl;
    cellsEl.style.gridTemplateRows = 'repeat(7, 11px)';

    let total = 0;
    days.forEach(function (day) {
      const ds = day.toISOString().slice(0, 10);
      const count = map[ds] || 0;
      total += count;
      const cell = document.createElement('div');
      cell.className = 'gh-cell';
      cell.setAttribute('data-date', ds);
      cell.setAttribute('data-count', String(count));
      cell.style.backgroundColor = getColor(count);
      cellsEl.appendChild(cell);
    });

    const rem = numWeeks * 7 - days.length;
    for (let i = 0; i < rem; i++) {
      const pad = document.createElement('div');
      pad.className = 'gh-cell gh-cell-empty';
      cellsEl.appendChild(pad);
    }

    if (totalEl) totalEl.textContent = total + ' contribution' + (total !== 1 ? 's' : '') + ' in the last year';
    return total;
  }

  /* ─── Recent activity ─── */
  function buildActivity(commits) {
    const listEl = document.getElementById('gh-commits');
    if (!listEl) return;
    const recent = commits.slice(0, 6);
    if (recent.length === 0) {
      listEl.innerHTML = '<li class="gh-commit-item"><span class="gh-commit-msg gh-muted">No recent activity found.</span></li>';
      return;
    }
    listEl.innerHTML = recent.map(function (c) {
      const msg = c.commit.message.split('\n')[0];
      const short = msg.length > 72 ? msg.slice(0, 72) + '\u2026' : msg;
      return '<li class="gh-commit-item">' +
        '<span class="gh-commit-dot"></span>' +
        '<span class="gh-commit-msg">' + short + '</span>' +
        '<span class="gh-commit-time">' + relativeTime(c.commit.author.date) + '</span>' +
        '</li>';
    }).join('');
  }

  /* ─── Tooltip ─── */
  function initTooltip() {
    const tip = document.createElement('div');
    tip.id = 'gh-cell-tooltip';
    Object.assign(tip.style, {
      position: 'fixed', display: 'none',
      background: '#1f2937', border: '1px solid #374151',
      color: '#e0e0e0', fontFamily: "'JetBrains Mono', monospace",
      fontSize: '11px', padding: '4px 8px', borderRadius: '4px',
      pointerEvents: 'none', zIndex: '9999', whiteSpace: 'nowrap'
    });
    document.body.appendChild(tip);
    document.addEventListener('mouseover', function (e) {
      const cell = e.target.closest && e.target.closest('.gh-cell');
      if (!cell || cell.classList.contains('gh-cell-empty')) { tip.style.display = 'none'; return; }
      const count = parseInt(cell.getAttribute('data-count'), 10);
      tip.textContent = (count === 0 ? 'No contributions' : count + ' commit' + (count !== 1 ? 's' : '')) + ' on ' + cell.getAttribute('data-date');
      tip.style.display = 'block';
    });
    document.addEventListener('mousemove', function (e) {
      tip.style.left = (e.clientX + 12) + 'px';
      tip.style.top  = (e.clientY - 32) + 'px';
    });
    document.addEventListener('mouseout', function (e) {
      if (!e.target.closest || !e.target.closest('.gh-cell')) tip.style.display = 'none';
    });
  }

  /* ─── Build sidebar HTML (compact = smaller avatar for content pages) ─── */
  function buildSidebarHTML(compact) {
    var avatarStyle = compact ? ' style="width:120px;height:120px;font-size:46px"' : '';
    return (
      '<aside class="gh-sidebar">' +
        '<div class="gh-avatar-box"' + avatarStyle + '>👻</div>' +
        '<div class="gh-fullname">Luiz Wagner Mestrinho</div>' +
        '<div class="gh-login">mestrinho</div>' +
        '<div class="gh-bio">Founder · Mechanic · Dev · Musician · Trilingual</div>' +
        '<a href="https://www.linkedin.com/in/mestrinho" target="_blank" rel="noopener" class="gh-connect-btn">Connect on LinkedIn</a>' +
        '<div class="gh-stats-row">' +
          '<div class="gh-stat"><span class="gh-stat-num">11+</span><span class="gh-stat-label">yrs · AP</span></div>' +
          '<div class="gh-stat"><span class="gh-stat-num">80+</span><span class="gh-stat-label">events/yr</span></div>' +
          '<div class="gh-stat"><span class="gh-stat-num">3</span><span class="gh-stat-label">languages</span></div>' +
        '</div>' +
        '<ul class="gh-info-list">' +
          '<li>📍 Orlando, FL</li>' +
          '<li>🌐 <a href="https://robotfantome.com" target="_blank" rel="noopener">robotfantome.com</a></li>' +
          '<li>💼 <a href="https://linkedin.com/in/mestrinho" target="_blank" rel="noopener">linkedin/mestrinho</a></li>' +
          '<li>🎵 First Bass · Bach Festival Society</li>' +
          '<li>🏎️ Traveling Mechanic · PCJ Karting</li>' +
        '</ul>' +
      '</aside>'
    );
  }

  /* ─── Build tab nav HTML (active tab from current URL) ─── */
  function buildTabsHTML() {
    var path = window.location.pathname;
    var tabs = NAV_TABS.map(function (t) {
      var active = t.re.test(path) ? ' active' : '';
      return '<a class="gh-tab-item' + active + '" href="' + t.href + '">' + t.label + '</a>';
    }).join('');
    return '<nav class="gh-tabs-nav">' + tabs + '</nav>';
  }

  /* ─── Inject sidebar + tab nav on non-home pages ─── */
  function injectLayout() {
    // Home page already has .gh-profile-wrapper in its HTML — skip
    if (document.querySelector('.gh-profile-wrapper')) return;

    var inner = document.querySelector('.md-content__inner');
    if (!inner) return;

    // Lift all existing page content into a document fragment
    var frag = document.createDocumentFragment();
    while (inner.firstChild) frag.appendChild(inner.firstChild);

    // Wrap fragment in a .gh-main div and prepend the tab nav
    var mainDiv = document.createElement('main');
    mainDiv.className = 'gh-main';
    mainDiv.innerHTML = buildTabsHTML();
    mainDiv.appendChild(frag);

    // Build the 2-column wrapper: sidebar + main
    var wrapper = document.createElement('div');
    wrapper.className = 'gh-profile-wrapper';
    wrapper.innerHTML = buildSidebarHTML(true); // compact avatar on content pages
    wrapper.appendChild(mainDiv);

    inner.appendChild(wrapper);
  }

  /* ─── Entry point ─── */
  async function init() {
    // Inject layout on all pages (no-op on home page)
    injectLayout();

    // Contribution graph + activity — home page only
    if (!document.getElementById('gh-contrib-cells')) return;
    initTooltip();
    const commits = await fetchCommits();
    const map     = buildMap(commits);
    buildGraph(map);
    buildActivity(commits);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
