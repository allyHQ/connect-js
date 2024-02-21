function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var AllyConnect = /*#__PURE__*/function () {
  function AllyConnect(appId) {
    var _this = this;
    _classCallCheck(this, AllyConnect);
    this.appId = appId;
    this.url = "https://connect.ally.wtf";
    this.appUrl = "".concat(this.url, "/").concat(this.appId);
    this.containerId = 'iframe-container';
    this.callbacks = {};
    this.callbacks["close"] = function (data) {
      document.getElementById(_this.containerId).remove();
    };
  }
  _createClass(AllyConnect, [{
    key: "openWidget",
    value: function openWidget() {
      var iframe = document.createElement('iframe');
      var iframeContainer = document.createElement('div');
      iframeContainer.id = this.containerId;
      document.body.appendChild(iframeContainer);
      iframe.src = this.appUrl;
      iframe.id = 'ally-connect';
      var style = document.createElement('style');
      style.textContent = "\n            #ally-connect {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                border: none;\n                background-color: transparent;\n            }\n        ";
      document.getElementById('iframe-container').appendChild(iframe);
      document.head.appendChild(style);
      iframeContainer.appendChild(iframe);
      var self = this;
      window.addEventListener('message', function (event) {
        self.handleEvent(event.data);
      });
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var selected_event = event.type.split('.');
      selected_event = selected_event[selected_event.length - 1];
      var callback = this.callbacks[selected_event];
      if (callback) {
        callback(event.data);
      }
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this.callbacks[event] = callback;
    }
  }]);
  return AllyConnect;
}();

export { AllyConnect as default };
