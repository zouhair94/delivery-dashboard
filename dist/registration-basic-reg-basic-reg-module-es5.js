(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-basic-reg-basic-reg-module"], {
    /***/
    "Knfp": function Knfp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicRegComponent", function () {
        return BasicRegComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicRegComponent = /*#__PURE__*/function () {
        function BasicRegComponent() {
          _classCallCheck(this, BasicRegComponent);
        }

        _createClass(BasicRegComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
          }
        }]);

        return BasicRegComponent;
      }();

      BasicRegComponent.ɵfac = function BasicRegComponent_Factory(t) {
        return new (t || BasicRegComponent)();
      };

      BasicRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BasicRegComponent,
        selectors: [["app-basic-reg"]],
        decls: 62,
        vars: 0,
        consts: [[1, "login", "p-fixed", "d-flex", "text-center", "bg-primary", "common-img-bg"], [1, "auth-fluid"], [1, "row"], [1, "col-sm-12"], [1, "login-card", "card-body", "auth-body"], [1, "md-float-material"], [1, "text-center"], ["src", "assets/images/auth/logo-dark.png", "alt", "Guru Able"], [1, "auth-box"], [1, "row", "m-b-20"], [1, "col-md-12"], [1, "text-center", "txt-primary"], [1, "input-group"], ["type", "text", "placeholder", "Choose Username", 1, "form-control"], [1, "md-line"], ["type", "text", "placeholder", "Your Email Address", 1, "form-control"], ["type", "password", "placeholder", "Choose Password", 1, "form-control"], ["type", "password", "placeholder", "Confirm Password", 1, "form-control"], [1, "row", "m-t-25", "text-left"], [1, "checkbox-fade", "fade-in-primary"], ["type", "checkbox", "value", ""], [1, "cr"], [1, "cr-icon", "icofont", "icofont-ui-check", "txt-primary"], [1, "text-inverse"], ["href", "javascript:;"], [1, "row", "m-t-30"], ["type", "button", 1, "btn", "btn-primary", "btn-md", "btn-block", "waves-effect", "text-center", "m-b-20"], [1, "col-md-10"], [1, "text-inverse", "text-left", "m-b-0"], [1, "text-inverse", "text-left"], [1, "col-md-2"], ["src", "assets/images/auth/Logo-small-bottom.png", "alt", "small-logo.png"]],
        template: function BasicRegComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign up. It is fast and easy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "I read and accept ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Terms & Conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Send me the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " weekly.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sign up now.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Thank you and enjoy our website.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Your Autentification Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1yZWcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "QYZW": function QYZW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicRegRoutingModule", function () {
        return BasicRegRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _basic_reg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-reg.component */
      "Knfp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _basic_reg_component__WEBPACK_IMPORTED_MODULE_1__["BasicRegComponent"],
        data: {
          title: 'Simple Registration'
        }
      }];

      var BasicRegRoutingModule = function BasicRegRoutingModule() {
        _classCallCheck(this, BasicRegRoutingModule);
      };

      BasicRegRoutingModule.ɵfac = function BasicRegRoutingModule_Factory(t) {
        return new (t || BasicRegRoutingModule)();
      };

      BasicRegRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: BasicRegRoutingModule
      });
      BasicRegRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BasicRegRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "w4Rk": function w4Rk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicRegModule", function () {
        return BasicRegModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_reg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./basic-reg.component */
      "Knfp");
      /* harmony import */


      var _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-reg-routing.module */
      "QYZW");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasicRegModule = function BasicRegModule() {
        _classCallCheck(this, BasicRegModule);
      };

      BasicRegModule.ɵfac = function BasicRegModule_Factory(t) {
        return new (t || BasicRegModule)();
      };

      BasicRegModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: BasicRegModule
      });
      BasicRegModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRegRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BasicRegModule, {
          declarations: [_basic_reg_component__WEBPACK_IMPORTED_MODULE_1__["BasicRegComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _basic_reg_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRegRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=registration-basic-reg-basic-reg-module-es5.js.map