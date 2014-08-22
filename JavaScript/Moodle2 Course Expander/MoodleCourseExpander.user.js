// ==UserScript==
// @name        Moodle2 Course Expander
// @namespace   DragonDragoon
// @description Automatically expands the "My Courses" tabs for the current semester.
// @author      DragonDragoon
// @include     *//moodle2.uncc.edu*
// @version     1.0.0
// @grant       none
// @icon        data:image/png;base64,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
// ==/UserScript==

'use strict';

(function() {
  var d, db, h, $;

  d = document;
  db = document.body;
  h = document.getElementsByTagName('head')[0];

  $ = function(s, p) {
    if (!p || p == null) {
      p = d;
    }
    return p.querySelector(s);
  };

  $.att = function(s, a, v) {
    if (!v || v == null || v == false) {
      if (v == false) {
        return s.removeAttribute(a);
      } else {
        return s.getAttribute(a);
      }
    } else {
      s.setAttribute(a, v);
      return s;
    }
  };

  $.ready = function (fc) {
    var cb;
    if (d.readyState !== 'loading') {
      fc();
      return ;
    }
    cb = function () {
      $.off(d, 'DOMContentLoaded', cb);
      return fc();
    };
    return $.on(d, 'DOMContentLoaded', cb);
  };

  $.on = function (el, type, handler) {
    return el.addEventListener(type, handler, false);
  };

  $.off = function (el, type, handler) {
    return el.removeEventListener(type, handler, false);
  };

  var courseExpander = {
    timeout: 100,
    init: function() {
      var sel = $('#expandable_branch_0_mycourses');
      courseExpander.timeoutClick(sel);
      courseExpander.timeoutExpand(sel);
    },
    timeoutClick: function(sel) {
      if ($.att(sel.parentNode, 'aria-expanded') === "false") {
        sel.click();
        setTimeout(function() {
          courseExpander.timeoutClick(sel);
        }, courseExpander.timeout);
      }
    },
    timeoutExpand: function(sel) {
      var _ref;
      if ($.att(sel, 'data-loaded') === "1") {
        _ref = sel.parentNode.childNodes[1].childNodes[0].childNodes[0];
        if ($.att(_ref.parentNode, 'aria-expanded') === "false")
          _ref.click();
      } else {
        window.setTimeout(function() {
          courseExpander.timeoutExpand(sel);
        }, courseExpander.timeout);
      }
    }
  };

  $.ready(courseExpander.init);
  
}).call(this);