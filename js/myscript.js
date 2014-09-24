var code = function() {
  'use strict';

  return {
    auto_refresh: false,

    timeout: null,

    toggle: function() {
      this.auto_refresh = !this.auto_refresh;

      if (this.auto_refresh) {
        this.__turnCycleOn();
      } else {
        this.__turnCycleOff();
      }

      return false;
    },

    init: function() {
      var self = this,
        anchor = document.createElement('a'),
        child = document.getElementById('returnlink'),
        snippet = '<img id="_yoloswag8417_" class="topnav_icon" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-refresh-128.png" alt="" />';

      anchor.setAttribute('id', '_yoloswag8317_');
      anchor.setAttribute('title', 'Toggle auto refresh ;)');
      anchor.innerHTML = snippet;
      anchor.onclick = function() {
        self.toggle.apply(self);
      };
      child.parentNode.insertBefore(anchor, child);
    },

    __toggleButton: function(flag) {
      var button = document.getElementById('_yoloswag8417_');
      if (flag) {
        button.setAttribute('style', '-webkit-filter: invert(0.5);');
      } else {
        button.setAttribute('style', '');
      }
      return this;
    },

    __turnCycleOn: function() {
      this
        .__toggleButton(true)
        .timeout = window.setInterval(function() {
          if (!updating) {
            sendRequest();
          }
        }, 5000);
    },

    __turnCycleOff: function() {
      this.__toggleButton(false);
      if (this.timeout) {
        window.clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  };
};

var script = document.createElement('script');
script.textContent = '(' + code + '().init())';
(document.head).appendChild(script);
script.parentNode.removeChild(script);
