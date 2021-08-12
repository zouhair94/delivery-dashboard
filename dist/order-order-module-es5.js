(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
    /***/
    "+p+5": function p5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      "Ns4C");
      /* harmony import */


      var _order_route_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-route.module */
      "GN9b");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_toasty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-toasty */
      "0OCT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderModule = function OrderModule() {
        _classCallCheck(this, OrderModule);
      };

      OrderModule.ɵfac = function OrderModule_Factory(t) {
        return new (t || OrderModule)();
      };

      OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: OrderModule
      });
      OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _order_route_module__WEBPACK_IMPORTED_MODULE_2__["OrderRouteModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OrderModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _order_route_module__WEBPACK_IMPORTED_MODULE_2__["OrderRouteModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_5__["ToastyModule"]]
        });
      })();
      /***/

    },

    /***/
    "GN9b": function GN9b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRouteModule", function () {
        return OrderRouteModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      "Ns4C");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
      }];

      var OrderRouteModule = function OrderRouteModule() {
        _classCallCheck(this, OrderRouteModule);
      };

      OrderRouteModule.ɵfac = function OrderRouteModule_Factory(t) {
        return new (t || OrderRouteModule)();
      };

      OrderRouteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: OrderRouteModule
      });
      OrderRouteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderRouteModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "Ns4C": function Ns4C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! apollo-angular */
      "/IUn");
      /* harmony import */


      var ng2_toasty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-toasty */
      "0OCT");
      /* harmony import */


      var _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/modal-basic/modal-basic.component */
      "mxSe");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/card/card.component */
      "Fe25");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "table-danger": a0,
          "table-warning": a1,
          "table-success": a2
        };
      };

      function MainComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_tr_25_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var order_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.updateOrder(order_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "update");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_tr_25_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var order_r4 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.deleteOrder(order_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r4 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](13, _c0, order_r4.status === "inactive", order_r4.status === "pending", order_r4.status === "delivered"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r4.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r4.from.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](order_r4.to.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", order_r4.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", order_r4.by.name, " ", order_r4.by.surname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 11, order_r4.createdAt));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbPopover", ctx_r0.successContent);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbPopover", ctx_r0.successContent);
        }
      }

      function MainComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_td_30_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.getMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Get More!");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function MainComponent_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", item_r10._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r10.name, " ", item_r10.surname, " ");
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(apollo, route, fb, toastyService, titleService, router) {
          _classCallCheck(this, MainComponent);

          this.apollo = apollo;
          this.route = route;
          this.fb = fb;
          this.toastyService = toastyService;
          this.titleService = titleService;
          this.router = router;
          this.subscriptions = [];
          this.orders = [];
          this.order = {};
          this.text = 'Update order status';
          this.orderForm = this.fb.group({
            status: [""],
            delivery: [""]
          }); //notify

          this.position = 'bottom-right';
          this.showClose = true;
          this.theme = 'bootstrap';
          this.type = 'default';
          this.closeOther = false;
          this.skip = 0;
          this.ordersLength = 0;
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Orders management');
            this.getOrders();
            this.getDeliveryMen();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.forEach(function (e) {
              return e.unsubscribe();
            });
          }
        }, {
          key: "addToast",
          value: function addToast(options) {
            if (options.closeOther) {
              this.toastyService.clearAll();
            }

            this.position = options.position ? options.position : this.position;
            var toastOptions = {
              title: options.title,
              msg: options.msg,
              showClose: options.showClose,
              timeout: options.timeout,
              theme: options.theme,
              onAdd: function onAdd(toast) {
                /* added */
                console.log('Toast  has been added!');
              },
              onRemove: function onRemove(toast) {
                /* removed */
                console.log('deleted!');
              }
            };

            switch (options.type) {
              case 'default':
                this.toastyService["default"](toastOptions);
                break;

              case 'info':
                this.toastyService.info(toastOptions);
                break;

              case 'success':
                this.toastyService.success(toastOptions);
                break;

              case 'wait':
                this.toastyService.wait(toastOptions);
                break;

              case 'error':
                this.toastyService.error(toastOptions);
                break;

              case 'warning':
                this.toastyService.warning(toastOptions);
                break;
            }
          }
        }, {
          key: "getOrders",
          value: function getOrders(surname) {
            var _this = this;

            var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var query = this.apollo.watchQuery({
              fetchPolicy: 'no-cache',
              query: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n              query getAllOrders($surname: String, $skip: Float) {\n                getAllOrders(surname: $surname, skip:$skip){\n                    _id\n                    title\n                    description\n                    from {\n                      address\n                    }\n                    to {\n                      address\n                    }\n                    by {\n                      name\n                      surname\n                    }\n                    status\n                    createdAt\n                }\n              }\n\n              \n          "]))),
              variables: {
                surname: surname,
                skip: skip
              }
            }).valueChanges.subscribe(function (res) {
              var _a;

              _this.orders = [].concat(_toConsumableArray(_this.orders), _toConsumableArray((_a = res.data) === null || _a === void 0 ? void 0 : _a.getAllOrders));
              _this.ordersLength = _this.orders.length;
            }, function (err) {
              _this.addToast({
                title: 'Error',
                msg: err.message,
                timeout: 5000,
                theme: 'material',
                position: 'bottom-right',
                type: 'error'
              });
            });
            this.subscriptions.push(query);
          }
        }, {
          key: "getDeliveryMen",
          value: function getDeliveryMen() {
            var _this2 = this;

            var query = this.apollo.watchQuery({
              query: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["gql"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        query DeliveryList {\n          findAllDelivery{\n                _id\n                name\n                surname\n              }\n          }\n      "])))
            }).valueChanges.subscribe(function (res) {
              var _a;

              _this2.delivery = (_a = res.data) === null || _a === void 0 ? void 0 : _a.findAllDelivery;
            });
            this.subscriptions.push(query);
          }
        }, {
          key: "getMore",
          value: function getMore() {
            this.skip = this.skip + 10;
            this.getOrders(null, this.skip);
          }
        }, {
          key: "search",
          value: function search(e) {
            this.orders = [];
            this.getOrders(e);
          }
        }, {
          key: "updateOrder",
          value: function updateOrder(order) {
            this.order = order;
            this.orderForm.patchValue({
              status: this.order.status,
              delivery: this.order.delivery
            });
            this.modal.show();
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var _this3 = this;

            var id = this.order._id;
            var UpdateOrderDto = this.orderForm.value;
            var mutate = this.apollo.mutate({
              mutation: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["gql"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          mutation updateOrder($id: String!, $UpdateOrderDto : UpdateOrderDto! ) {\n            updateOrder(id: $id, UpdateOrderDto : $UpdateOrderDto ){\n                title\n            }\n          }\n      "]))),
              variables: {
                id: id,
                UpdateOrderDto: UpdateOrderDto
              }
            }).subscribe(function (res) {
              _this3.orders = [];
              _this3.skip = 0;

              _this3.getOrders();

              _this3.modal.hide();

              _this3.addToast({
                title: 'Done',
                msg: 'Order has been Updated!',
                timeout: 5000,
                theme: 'material',
                position: 'bottom-right',
                type: 'success'
              });
            }, function (err) {
              _this3.addToast({
                title: 'Error',
                msg: err.message,
                timeout: 5000,
                theme: 'material',
                position: 'bottom-right',
                type: 'error'
              });
            });
            this.subscriptions.push(mutate);
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(id) {
            var _this4 = this;

            var query = this.apollo.mutate({
              mutation: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["gql"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        mutation removeOrder($id: String!) {\n          removeOrder(id: $id) {\n            _id\n          }\n        }\n      "]))),
              variables: {
                id: id
              }
            }).subscribe(function (res) {
              _this4.skip = 0;
              _this4.orders = [];

              _this4.addToast({
                title: 'Done',
                msg: 'Order has been Removed!',
                timeout: 5000,
                theme: 'material',
                position: 'bottom-right',
                type: 'success'
              });

              _this4.getOrders();
            }, function (err) {
              _this4.addToast({
                title: 'Error',
                msg: err.message,
                timeout: 5000,
                theme: 'material',
                position: 'bottom-right',
                type: 'error'
              });
            });
            this.subscriptions.push(query);
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_4__["ModalBasicComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          }
        },
        decls: 60,
        vars: 12,
        consts: [[3, "title"], [1, "form-group"], ["type", "text", "placeholder", "Search by surname", 1, "form-control", "form-control-normal", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "table-hover"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["style", "align-items: center;", 4, "ngIf"], ["Modal", ""], [1, "app-modal-header"], [1, "app-modal-body"], [3, "formGroup", "ngSubmit"], ["placeholder", "deliver", "formControlName", "delivery", "required", "", 1, "form-control", "form-control-normal"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["placeholder", "Status", "formControlName", "status", "required", "", 1, "form-control", "form-control-normal"], ["value", "inactive", 3, "selected"], ["value", "pending", 3, "selected"], ["value", "delivered", 3, "selected"], ["type", "submit", "placement", "bottom", 1, "btn", "btn-success", "btn-round"], [1, "app-modal-footer"], [3, "position"], [3, "ngClass"], ["scope", "row"], ["type", "button", "placement", "bottom", 1, "btn", "btn-success", "btn-round", 3, "ngbPopover", "click"], ["type", "button", "placement", "bottom", 1, "btn", "btn-danger", "btn-round", 3, "ngbPopover", "click"], [2, "align-items", "center"], [3, "click"], [3, "ngValue"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.surname = $event;
            })("ngModelChange", function MainComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.search($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "from");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "to");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "by");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " Created At ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, MainComponent_tr_25_Template, 21, 17, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, MainComponent_td_30_Template, 3, 0, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "app-modal-basic", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function MainComponent_Template_form_ngSubmit_41_listener() {
              return ctx.onUpdate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Choose a Delivery man!");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, MainComponent_option_46_Template, 2, 3, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "update");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](59, "ng2-toasty", 20);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Order Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.surname);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.orders);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ordersLength >= 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.orderForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.delivery);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.order.status === "inactive");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.order.status === "pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.order.status === "delivered");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("position", ctx.position);
          }
        },
        directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_4__["ModalBasicComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], ng2_toasty__WEBPACK_IMPORTED_MODULE_3__["ToastyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbPopover"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-order-module-es5.js.map