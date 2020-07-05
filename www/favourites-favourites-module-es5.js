function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourites-favourites-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favourites/favourites.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourites/favourites.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavouritesFavouritesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>favourites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/favourites/favourites-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/favourites/favourites-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FavouritesPageRoutingModule */

  /***/
  function srcAppFavouritesFavouritesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesPageRoutingModule", function () {
      return FavouritesPageRoutingModule;
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


    var _favourites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favourites.page */
    "./src/app/favourites/favourites.page.ts");

    var routes = [{
      path: '',
      component: _favourites_page__WEBPACK_IMPORTED_MODULE_3__["FavouritesPage"]
    }];

    var FavouritesPageRoutingModule = function FavouritesPageRoutingModule() {
      _classCallCheck(this, FavouritesPageRoutingModule);
    };

    FavouritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavouritesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/favourites/favourites.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/favourites/favourites.module.ts ***!
    \*************************************************/

  /*! exports provided: FavouritesPageModule */

  /***/
  function srcAppFavouritesFavouritesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function () {
      return FavouritesPageModule;
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


    var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./favourites-routing.module */
    "./src/app/favourites/favourites-routing.module.ts");
    /* harmony import */


    var _favourites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favourites.page */
    "./src/app/favourites/favourites.page.ts");

    var FavouritesPageModule = function FavouritesPageModule() {
      _classCallCheck(this, FavouritesPageModule);
    };

    FavouritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favourites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritesPageRoutingModule"]],
      declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_6__["FavouritesPage"]]
    })], FavouritesPageModule);
    /***/
  },

  /***/
  "./src/app/favourites/favourites.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/favourites/favourites.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavouritesFavouritesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZXMvZmF2b3VyaXRlcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/favourites/favourites.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/favourites/favourites.page.ts ***!
    \***********************************************/

  /*! exports provided: FavouritesPage */

  /***/
  function srcAppFavouritesFavouritesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouritesPage", function () {
      return FavouritesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FavouritesPage = /*#__PURE__*/function () {
      function FavouritesPage() {
        _classCallCheck(this, FavouritesPage);
      }

      _createClass(FavouritesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavouritesPage;
    }();

    FavouritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favourites',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./favourites.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favourites/favourites.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./favourites.page.scss */
      "./src/app/favourites/favourites.page.scss"))["default"]]
    })], FavouritesPage);
    /***/
  }
}]);
//# sourceMappingURL=favourites-favourites-module-es5.js.map