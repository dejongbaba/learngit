function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shuffler-shuffler-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shuffler/shuffler.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShufflerShufflerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"home\">\n    <ion-row class=\"ion-margin-top ion-margin-bottom header-row\">\n        <ion-col class=\"ion-margin-top\" offsetLg=\"3\" sizeLg=\"6\">\n            <h1 class=\"ion-text-center ion-margin-top\">Git Commands and cheatsheet</h1>\n            <ion-searchbar autocomplete (ionChange)=\"search($event)\"></ion-searchbar>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!filteredCommands.length\">\n        <ion-col sizeLg=\"4\" *ngFor=\"let item of commands\">\n            <ion-card class=\"ion-padding-top app-card ion-margin-top ion-margin-bottom\">\n                <ion-card-header>\n                    <ion-card-title class=\"ion-text-capitalize\" color=\"primary\">{{item.title}}</ion-card-title>\n                    <pre><code>{{item.command}}</code></pre>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.description}}\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"filteredCommands.length\">\n        <ion-col sizeLg=\"4\" *ngFor=\"let item of filteredCommands\">\n            <ion-card class=\"ion-padding-top app-card ion-margin-top ion-margin-bottom\">\n                <ion-card-header>\n                    <ion-card-title class=\"ion-text-capitalize\" color=\"primary\">{{item.title}}</ion-card-title>\n                    <pre><code>{{item.command}}</code></pre>\n                </ion-card-header>\n                <ion-card-content>\n                    {{item.description}}\n                </ion-card-content>\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/shuffler/shuffler-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ShufflerPageRoutingModule */

  /***/
  function srcAppShufflerShufflerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShufflerPageRoutingModule", function () {
      return ShufflerPageRoutingModule;
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


    var _shuffler_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _shuffler_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var ShufflerPageRoutingModule = function ShufflerPageRoutingModule() {
      _classCallCheck(this, ShufflerPageRoutingModule);
    };

    ShufflerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShufflerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/shuffler/shuffler.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: ShufflerPageModule */

  /***/
  function srcAppShufflerShufflerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShufflerPageModule", function () {
      return ShufflerPageModule;
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


    var _shuffler_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");
    /* harmony import */


    var _shuffler_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var ShufflerPageModule = function ShufflerPageModule() {
      _classCallCheck(this, ShufflerPageModule);
    };

    ShufflerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shuffler_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShufflerPageRoutingModule"]],
      declarations: [_shuffler_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], ShufflerPageModule);
    /***/
  },

  /***/
  "./src/app/shuffler/shuffler.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppShufflerShufflerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".home {\n  --background: #f1f3f5;\n}\n.home .header-row {\n  padding-top: 5rem !important;\n}\n.home .app-card {\n  margin: 1rem;\n  min-height: 200px;\n  padding: 1rem;\n}\n.home .app-card ion-card-title {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvUGhwc3Rvcm1Qcm9qZWN0cy9sZWFybi1naXQvc3JjL2FwcC9zaHVmZmxlci9zaHVmZmxlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3NodWZmbGVyL3NodWZmbGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLDRCQUFBO0FDRUo7QURDRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvc2h1ZmZsZXIvc2h1ZmZsZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNodWZmbGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjFmM2Y1O1xuICAuaGVhZGVyLXJvdyB7XG4gICAgcGFkZGluZy10b3A6IDVyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5hcHAtY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICBpb24tY2FyZC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi5zaHVmZmxlciB7XG4gIC0tYmFja2dyb3VuZDogI2YxZjNmNTtcbn1cbi5zaHVmZmxlciAuaGVhZGVyLXJvdyB7XG4gIHBhZGRpbmctdG9wOiA1cmVtICFpbXBvcnRhbnQ7XG59XG4uc2h1ZmZsZXIgLmFwcC1jYXJkIHtcbiAgbWFyZ2luOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zaHVmZmxlciAuYXBwLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shuffler/shuffler.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \*******************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppShufflerShufflerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return ShufflerPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ShufflerPage = /*#__PURE__*/function () {
      function ShufflerPage(navCtrl) {
        _classCallCheck(this, ShufflerPage);

        this.navCtrl = navCtrl;
        this.items = [{
          command: 'git init <directory>',
          title: 'Initialize Git',
          description: 'Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository'
        }, {
          command: 'git clone <repo>',
          title: 'Clone online Repo to Local device',
          description: 'Clone repo located at <repo> onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH.'
        }, {
          command: 'git config  user.name <name>',
          title: 'Configure user name',
          description: 'Define author name to be used for all commits in current repo. Devs commonly use --global flag to set config options for current user'
        }, {
          command: 'git commit -m  "<message>"',
          title: 'Add message to denote your change',
          description: 'Commit the staged snapshot, but instead of launching a text editor, use <message> as the commit message.'
        }, {
          command: 'git status',
          title: 'Get your current application status',
          description: 'List which files are staged, unstaged, and untracked.'
        }, {
          command: 'git log',
          title: 'Get Logs of your git activities',
          description: 'Display the entire commit history using the default format. For customization see additional options.'
        }, {
          command: 'git diff',
          title: 'Get difference in working directory ',
          description: 'Show unstaged changes between your index and working directory.'
        }];
        this.filteredItems = [];
      }

      _createClass(ShufflerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('got here to home');
        }
      }, {
        key: "search",
        value: function search(event) {
          // Get the search terms from the input field
          var searchTerm = event.target.value;

          if (!searchTerm) {
            this.filteredItems = [];
          }

          console.log('searchTerm', searchTerm); // Tokenize the search terms and remove empty spaces

          var tokens = searchTerm.toLowerCase().split(' ').filter(function (token) {
            return token.trim() !== '';
          });
          console.log('tokens', tokens);

          if (tokens.length) {
            //  Create a regular expression of all the search terms
            console.log('into filter block', tokens.length);
            var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
            console.log('searchTermRegex', searchTermRegex);
            var filteredData = this.commands.filter(function (item) {
              // Create a string of all object values
              var searchString = '';

              for (var key in item) {
                if (item.hasOwnProperty(key) && item[key] !== '') {
                  searchString += item[key].toString().toLowerCase().trim() + ' ';
                }
              } // Return objects where a match with the search regex if found


              return searchString.match(searchTermRegex);
            });
            this.filteredItems = filteredData;
          }
        }
      }, {
        key: "onView",
        value: function onView(item) {
          console.log('item', item); // this.navCtrl.navigateForward(ViewerPage, {...item});
        }
      }]);

      return ShufflerPage;
    }();

    ShufflerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ShufflerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], ShufflerPage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map
