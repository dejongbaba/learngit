function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-splash-module"], {
  /***/
  "./src/app/splash/splash-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/splash/splash-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SplashPageRoutingModule */

  /***/
  function srcAppSplashSplashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
      return SplashPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./splash.page */
    "./src/app/splash/splash.page.ts");

    var routes = [{
      path: '',
      component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
    }];

    var SplashPageRoutingModule = function SplashPageRoutingModule() {
      _classCallCheck(this, SplashPageRoutingModule);
    };

    SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SplashPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/splash/splash.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/splash/splash.module.ts ***!
    \*****************************************/

  /*! exports provided: SplashPageModule */

  /***/
  function srcAppSplashSplashModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
      return SplashPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./splash-routing.module */
    "./src/app/splash/splash-routing.module.ts");
    /* harmony import */


    var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./splash.page */
    "./src/app/splash/splash.page.ts");

    var SplashPageModule = function SplashPageModule() {
      _classCallCheck(this, SplashPageModule);
    };

    SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]],
      declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
    })], SplashPageModule);
    /***/
  }
}]);
//# sourceMappingURL=splash-splash-module-es5.js.map