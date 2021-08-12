(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"], {
    /***/
    "BUwF": function BUwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        data: {
          title: 'Authentication',
          status: false
        },
        children: [{
          path: 'login',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | login-basic-login-basic-login-module */
            "login-basic-login-basic-login-module").then(__webpack_require__.bind(null,
            /*! ./login/basic-login/basic-login.module */
            "Cyoc")).then(function (m) {
              return m.BasicLoginModule;
            });
          }
        }, {
          path: 'registration',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | registration-basic-reg-basic-reg-module */
            "registration-basic-reg-basic-reg-module").then(__webpack_require__.bind(null,
            /*! ./registration/basic-reg/basic-reg.module */
            "w4Rk")).then(function (m) {
              return m.BasicRegModule;
            });
          }
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "lBUW": function lBUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-routing.module */
      "BUwF");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵfac = function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-auth-auth-module-es5.js.map