function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js ***!
    \************************************************************************/

  /*! exports provided: ion_back_button */

  /***/
  function node_modulesIonicCoreDistEsmIonBackButtonIosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_back_button", function () {
      return BackButton;
    });
    /* harmony import */


    var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-29df6f59.js */
    "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
    /* harmony import */


    var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ionic-global-08f4fb8a.js */
    "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
    /* harmony import */


    var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme-3f0b0c04.js */
    "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");

    var backButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-commands:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}";
    var backButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-commands:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-text{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}";
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     *
     * @part native - The native HTML button element that wraps all child elements.
     * @part icon - The back button icon (uses ion-icon).
     * @part text - The back button text.
     */

    var BackButton = /*#__PURE__*/function () {
      function BackButton(hostRef) {
        var _this = this;

        _classCallCheck(this, BackButton);

        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the user cannot interact with the button.
         */

        this.disabled = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ev) {
            var nav;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    nav = _this.el.closest('ion-nav');
                    ev.preventDefault();
                    _context.t0 = nav;

                    if (!_context.t0) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return nav.canGoBack();

                  case 6:
                    _context.t0 = _context.sent;

                  case 7:
                    if (!_context.t0) {
                      _context.next = 9;
                      break;
                    }

                    return _context.abrupt("return", nav.pop({
                      animationBuilder: _this.routerAnimation,
                      skipIfBusy: true
                    }));

                  case 9:
                    return _context.abrupt("return", Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["o"])(_this.defaultHref, ev, 'back', _this.routerAnimation));

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

      _createClass(BackButton, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          if (this.defaultHref === undefined) {
            this.defaultHref = _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonDefaultHref');
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign;

          var color = this.color,
              defaultHref = this.defaultHref,
              disabled = this.disabled,
              type = this.type,
              hasIconOnly = this.hasIconOnly,
              backButtonIcon = this.backButtonIcon,
              backButtonText = this.backButtonText;
          var showBackButton = defaultHref !== undefined;
          var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this);
          return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'button', true), _defineProperty(_Object$assign, 'back-button-disabled', disabled), _defineProperty(_Object$assign, 'back-button-has-icon-only', hasIconOnly), _defineProperty(_Object$assign, 'in-toolbar', Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toolbar', this.el)), _defineProperty(_Object$assign, 'in-toolbar-color', Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toolbar[color]', this.el)), _defineProperty(_Object$assign, 'ion-activatable', true), _defineProperty(_Object$assign, 'ion-focusable', true), _defineProperty(_Object$assign, 'show-back-button', showBackButton), _Object$assign))
          }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: type,
            disabled: disabled,
            "class": "button-native",
            part: "native",
            "aria-label": backButtonText || 'back'
          }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "button-inner"
          }, backButtonIcon && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            part: "icon",
            icon: backButtonIcon,
            "aria-hidden": "true",
            lazy: false
          }), backButtonText && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            part: "text",
            "aria-hidden": "true",
            "class": "button-text"
          }, backButtonText)), mode === 'md' && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
            type: this.rippleType
          })));
        }
      }, {
        key: "backButtonIcon",
        get: function get() {
          var icon = this.icon;

          if (icon != null) {
            // icon is set on the component or by the config
            return icon;
          }

          if (Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios') {
            // default ios back button icon
            return _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonIcon', 'chevron-back');
          } // default md back button icon


          return _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonIcon', 'arrow-back-sharp');
        }
      }, {
        key: "backButtonText",
        get: function get() {
          var defaultBackButtonText = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this) === 'ios' ? 'Back' : null;
          return this.text != null ? this.text : _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_1__["c"].get('backButtonText', defaultBackButtonText);
        }
      }, {
        key: "hasIconOnly",
        get: function get() {
          return this.backButtonIcon && !this.backButtonText;
        }
      }, {
        key: "rippleType",
        get: function get() {
          // If the button only has an icon we use the unbounded
          // "circular" ripple effect
          if (this.hasIconOnly) {
            return 'unbounded';
          }

          return 'bounded';
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }]);

      return BackButton;
    }();

    BackButton.style = {
      /*STENCIL:MODE:ios*/
      ios: backButtonIosCss,

      /*STENCIL:MODE:md*/
      md: backButtonMdCss
    };
    /***/
  }
}]);
//# sourceMappingURL=8-es5.js.map
