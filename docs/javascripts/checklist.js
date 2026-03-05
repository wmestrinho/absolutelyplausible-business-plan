/**
 * Interactive checklist for MkDocs pymdownx.tasklist checkboxes.
 * Persists checked state to localStorage keyed by page path + checkbox index.
 */
(function () {
  "use strict";

  var STORAGE_PREFIX = "checklist:";

  /** Build a localStorage key for the current page. */
  function pageKey() {
    return STORAGE_PREFIX + window.location.pathname;
  }

  /** Load the saved state object for this page (index -> boolean). */
  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(pageKey())) || {};
    } catch (_) {
      return {};
    }
  }

  /** Persist the full state object for this page. */
  function saveState(state) {
    try {
      localStorage.setItem(pageKey(), JSON.stringify(state));
    } catch (_) {
      // Storage full or unavailable — fail silently.
    }
  }

  function init() {
    var checkboxes = document.querySelectorAll(
      ".task-list-item input[type=\"checkbox\"]"
    );
    if (!checkboxes.length) return;

    var state = loadState();

    checkboxes.forEach(function (cb, index) {
      // Enable the checkbox (MkDocs renders them disabled).
      cb.removeAttribute("disabled");
      cb.style.cursor = "pointer";

      // Restore saved state if it exists.
      if (state[index] !== undefined) {
        cb.checked = state[index];
      }

      // Persist on change.
      cb.addEventListener("change", function () {
        var current = loadState();
        current[index] = cb.checked;
        saveState(current);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
