(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete {\r\n  margin-left: 1em;\r\n  width: 2em;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background-color: #004579;\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\n.loginbutton {\r\n  margin-left: 1em;\r\n  min-width: 2em;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background-color: #004579;\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\ninput{\r\n  margin: 0.3em;\r\n  border-radius: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDU3OTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5sb2dpbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtaW4td2lkdGg6IDJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ1Nzk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgbWFyZ2luOiAwLjNlbTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-2 mt-2\">\r\n    <div class=\"col-12\">\r\n      <h2>Produkty</h2>\r\n    </div>\r\n  </div>\r\n    <div class=\"row mb-2 mt-2\">\r\n      <div class=\"col-lg-2\">\r\n        Nazwa\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        Cena\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        Krótki opis\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        Opis\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        Obraz\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        Ilość\r\n      </div>\r\n    </div>\n  <div class=\"row mb-2 mt-2\">\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.price\" placeholder=\"price\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.shortdescription\" placeholder=\"shortdescription\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.image\" placeholder=\"image\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"floss.amount\" placeholder=\"amount\"/>\n    </div>\n  </div>\n  <div class=\"row mb-2 mt-2\">\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.price\" placeholder=\"price\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.shortdescription\" placeholder=\"shortdescription\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.image\" placeholder=\"image\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"band.amount\" placeholder=\"amount\"/>\n    </div>\n  </div>\n  <div class=\"row mb-2 mt-2\">\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.price\" placeholder=\"price\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.shortdescription\" placeholder=\"shortdescription\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.image\" placeholder=\"image\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"ball.amount\" placeholder=\"amount\"/>\n    </div>\n  </div>\n  <div class=\"row mb-2 mt-2\">\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.price\" placeholder=\"price\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.shortdescription\" placeholder=\"shortdescription\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.image\" placeholder=\"image\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"mat.amount\" placeholder=\"amount\"/>\n    </div>\n  </div>\n  <div class=\"row mb-2 mt-2\">\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.name\" placeholder=\"name\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.price\" placeholder=\"price\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.shortdescription\" placeholder=\"shortdescription\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.description\" placeholder=\"description\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.image\" placeholder=\"image\"/>\n    </div>\n    <div class=\"col-lg-2\">\n      <input [(ngModel)]=\"roller.amount\" placeholder=\"amount\"/>\n    </div>\n  </div>\n</div>\n\n<div class=\"container mt-3 mb-2\">\r\n  <h2>Użytkownicy</h2>\r\n  <div>\r\n    <label>\r\n      Email:\r\n      <input [(ngModel)]=\"addUser.email\" />\r\n    </label>\r\n    <label>\r\n      Hasło:\r\n      <input [(ngModel)]=\"addUser.password\" />\r\n    </label>\r\n\r\n    <button class=\"loginbutton\" (click)=\"add()\">\r\n      Dodaj użytkownika\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mt-2 mb-2\">\r\n      <h3> Lista użytkowników</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let user of users; let userIdx = index;\">\r\n      <label>\r\n        Email:\r\n        <input [(ngModel)]=\"user.email\" />\r\n      </label>\r\n      <label>\r\n        Hasło:\r\n        <input [(ngModel)]=\"user.password\" />\r\n      </label>\r\n      <button class=\"delete\" title=\"usuń użytkownika\"\r\n              (click)=\"delete(userIdx)\">\r\n        x\r\n      </button>\r\n      <button class=\"loginbutton\" title=\"zapisz użytkownika\" (click)=\"save(user)\">Zapisz</button>\r\n\r\n    </li>\r\n  </ul>\r\n\r\n  <button class=\"loginbutton\" (click)=\"goBack()\">Powrót</button>\r\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService, location) {
        this.userService = userService;
        this.location = location;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.addUser = {
            email: '',
            password: ''
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    AdminComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminComponent.prototype.add = function () {
        var _this = this;
        console.log('addUser', this.addUser);
        this.userService.addUser(this.addUser)
            .subscribe(function (usernew) {
            _this.users.push(usernew);
        });
    };
    AdminComponent.prototype.save = function (user) {
        console.log(user);
        this.userService.updateUser(user).subscribe(function (data) {
        });
    };
    AdminComponent.prototype.delete = function (userIdx) {
        var _this = this;
        var user = this.users[userIdx];
        console.log('user', user);
        this.userService.deleteUser(user.id).subscribe(function () {
            console.log('ok');
            _this.users.splice(userIdx, 1);
        });
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _knee_knee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./knee/knee.component */ "./src/app/knee/knee.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _obszerny_boczny_obszerny_boczny_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./obszerny-boczny/obszerny-boczny.component */ "./src/app/obszerny-boczny/obszerny-boczny.component.ts");
/* harmony import */ var _floss_floss_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./floss/floss.component */ "./src/app/floss/floss.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _ball_ball_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ball/ball.component */ "./src/app/ball/ball.component.ts");
/* harmony import */ var _mat_mat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mat/mat.component */ "./src/app/mat/mat.component.ts");
/* harmony import */ var _roller_roller_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roller/roller.component */ "./src/app/roller/roller.component.ts");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _calf_calf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./calf/calf.component */ "./src/app/calf/calf.component.ts");
/* harmony import */ var _gluteus_maximus_gluteus_maximus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gluteus-maximus/gluteus-maximus.component */ "./src/app/gluteus-maximus/gluteus-maximus.component.ts");
/* harmony import */ var _semitendinosus_semitendinosus_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./semitendinosus/semitendinosus.component */ "./src/app/semitendinosus/semitendinosus.component.ts");





















var routes = [
    { path: '', redirectTo: '/content', pathMatch: 'full' },
    { path: 'content', component: _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"] },
    { path: 'rejestracja', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"] },
    { path: 'logowanie', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'sklep', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: 'wyszukiwarka', component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"] },
    { path: 'obszerny-boczny', component: _obszerny_boczny_obszerny_boczny_component__WEBPACK_IMPORTED_MODULE_10__["ObszernyBocznyComponent"] },
    { path: 'floss', component: _floss_floss_component__WEBPACK_IMPORTED_MODULE_11__["FlossComponent"] },
    { path: 'band', component: _band_band_component__WEBPACK_IMPORTED_MODULE_12__["BandComponent"] },
    { path: 'ball', component: _ball_ball_component__WEBPACK_IMPORTED_MODULE_13__["BallComponent"] },
    { path: 'mat', component: _mat_mat_component__WEBPACK_IMPORTED_MODULE_14__["MatComponent"] },
    { path: 'roller', component: _roller_roller_component__WEBPACK_IMPORTED_MODULE_15__["RollerComponent"] },
    { path: 'koszyk', component: _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingcartComponent"] },
    { path: 'konto', component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_17__["MyaccountComponent"] },
    { path: 'lydka', component: _calf_calf_component__WEBPACK_IMPORTED_MODULE_18__["CalfComponent"] },
    { path: 'dwuglowy-uda', component: _semitendinosus_semitendinosus_component__WEBPACK_IMPORTED_MODULE_20__["SemitendinosusComponent"] },
    { path: 'posladkowy-wielki', component: _gluteus_maximus_gluteus_maximus_component__WEBPACK_IMPORTED_MODULE_19__["GluteusMaximusComponent"] },
    { path: 'kolano', component: _knee_knee_component__WEBPACK_IMPORTED_MODULE_3__["KneeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-menu{\r\n  background-color: #f9f8fa;\r\n  border-radius: 20px;\r\n  position: fixed;\r\n  right: 10px;\r\n  top: 10em;\r\n  height: 8em;\r\n  width: 4em;\r\n}\r\n.sizeicon{\r\n  font-size: 2.5em;\r\n  color: #0078d2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtbWVudXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOGZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBlbTtcclxuICBoZWlnaHQ6IDhlbTtcclxuICB3aWR0aDogNGVtO1xyXG59XHJcbi5zaXplaWNvbntcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIGNvbG9yOiAjMDA3OGQyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Aplikacja pierwszej pomocy dla osób kontuzjowanych';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _knee_knee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./knee/knee.component */ "./src/app/knee/knee.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _obszerny_boczny_obszerny_boczny_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./obszerny-boczny/obszerny-boczny.component */ "./src/app/obszerny-boczny/obszerny-boczny.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _floss_floss_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./floss/floss.component */ "./src/app/floss/floss.component.ts");
/* harmony import */ var _band_band_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./band/band.component */ "./src/app/band/band.component.ts");
/* harmony import */ var _ball_ball_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ball/ball.component */ "./src/app/ball/ball.component.ts");
/* harmony import */ var _roller_roller_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./roller/roller.component */ "./src/app/roller/roller.component.ts");
/* harmony import */ var _mat_mat_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mat/mat.component */ "./src/app/mat/mat.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shoppingcart/shoppingcart.component */ "./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _calf_calf_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./calf/calf.component */ "./src/app/calf/calf.component.ts");
/* harmony import */ var _semitendinosus_semitendinosus_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./semitendinosus/semitendinosus.component */ "./src/app/semitendinosus/semitendinosus.component.ts");
/* harmony import */ var _gluteus_maximus_gluteus_maximus_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./gluteus-maximus/gluteus-maximus.component */ "./src/app/gluteus-maximus/gluteus-maximus.component.ts");







 //import skryptow javascript bootstrapa































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _knee_knee_component__WEBPACK_IMPORTED_MODULE_16__["KneeComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_17__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_19__["ShopComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                _obszerny_boczny_obszerny_boczny_component__WEBPACK_IMPORTED_MODULE_22__["ObszernyBocznyComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_23__["FilterPipe"],
                _floss_floss_component__WEBPACK_IMPORTED_MODULE_24__["FlossComponent"],
                _band_band_component__WEBPACK_IMPORTED_MODULE_25__["BandComponent"],
                _ball_ball_component__WEBPACK_IMPORTED_MODULE_26__["BallComponent"],
                _roller_roller_component__WEBPACK_IMPORTED_MODULE_27__["RollerComponent"],
                _mat_mat_component__WEBPACK_IMPORTED_MODULE_28__["MatComponent"],
                _shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingcartComponent"],
                _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_34__["MyaccountComponent"],
                _calf_calf_component__WEBPACK_IMPORTED_MODULE_35__["CalfComponent"],
                _semitendinosus_semitendinosus_component__WEBPACK_IMPORTED_MODULE_36__["SemitendinosusComponent"],
                _gluteus_maximus_gluteus_maximus_component__WEBPACK_IMPORTED_MODULE_37__["GluteusMaximusComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_32__["CookieService"],
                _cookies_service__WEBPACK_IMPORTED_MODULE_33__["CookiesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/ball/ball.component.css":
/*!*****************************************!*\
  !*** ./src/app/ball/ball.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbGwvYmFsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ball/ball.component.html":
/*!******************************************!*\
  !*** ./src/app/ball/ball.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4\">\n    <div class=\"col-lg-6 offset-lg-3\">\n      <div>\n        <h4 class=\"text-center\"> {{ball.name}} </h4>\n        <img class=\"img-fluid\" src=\"{{ball.image}}\" alt=\"ball\">\n        <div class=\"mt-4\">\n          <p> {{ball.description}} </p>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <p class=\"font-weight-bold\"> Cena {{ball.price}} zł </p>\n              <p> ilość w magazynie: {{ball.amount}} </p>\n            </div>\n            <div *ngIf=\"ball.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n              <button type=\"button\" (click)=\"addToCart(ball)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n            </div>\n            <ng-template #elseBlock>\n              <div class=\"col-lg-6 mb-2 mt-2\">\n                <button type=\"button\" (click)=\"addToCart(ball)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n              </div>\n            </ng-template>\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-primary btn-block\">Powrót</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ball/ball.component.ts":
/*!****************************************!*\
  !*** ./src/app/ball/ball.component.ts ***!
  \****************************************/
/*! exports provided: BallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallComponent", function() { return BallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var BallComponent = /** @class */ (function () {
    function BallComponent(cartService, location) {
        this.cartService = cartService;
        this.location = location;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    BallComponent.prototype.ngOnInit = function () {
    };
    BallComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    BallComponent.prototype.goBack = function () {
        this.location.back();
    };
    BallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ball',
            template: __webpack_require__(/*! ./ball.component.html */ "./src/app/ball/ball.component.html"),
            styles: [__webpack_require__(/*! ./ball.component.css */ "./src/app/ball/ball.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BallComponent);
    return BallComponent;
}());



/***/ }),

/***/ "./src/app/band/band.component.css":
/*!*****************************************!*\
  !*** ./src/app/band/band.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-events {\r\n  width: 300px;\r\n  height: 200px;\r\n  overflow: auto;\r\n  border: 1px solid #555;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYmFuZC9iYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWV2ZW50cyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/band/band.component.html":
/*!******************************************!*\
  !*** ./src/app/band/band.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <div>\r\n        <h4 class=\"text-center\"> {{band.name}} </h4>\r\n        <img class=\"img-fluid\" src=\"{{band.image}}\" alt=\"band\">\r\n        <div class=\"mt-4\">\r\n          <p> {{band.description}} </p>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\r\n              <p> ilość w magazynie: {{band.amount}} </p>\r\n            </div>\r\n            <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n              <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n            </div>\r\n            <ng-template #elseBlock>\r\n              <div class=\"col-lg-6 mb-2 mt-2\">\r\n                <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n              </div>\r\n            </ng-template>\r\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-primary btn-block\">Powrót</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/band/band.component.ts":
/*!****************************************!*\
  !*** ./src/app/band/band.component.ts ***!
  \****************************************/
/*! exports provided: BandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandComponent", function() { return BandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var BandComponent = /** @class */ (function () {
    function BandComponent(cartService, location) {
        this.cartService = cartService;
        this.location = location;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    BandComponent.prototype.ngOnInit = function () {
    };
    BandComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    BandComponent.prototype.goBack = function () {
        this.location.back();
    };
    BandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-band',
            template: __webpack_require__(/*! ./band.component.html */ "./src/app/band/band.component.html"),
            styles: [__webpack_require__(/*! ./band.component.css */ "./src/app/band/band.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], BandComponent);
    return BandComponent;
}());



/***/ }),

/***/ "./src/app/calf/calf.component.css":
/*!*****************************************!*\
  !*** ./src/app/calf/calf.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGYvY2FsZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calf/calf.component.html":
/*!******************************************!*\
  !*** ./src/app/calf/calf.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <h1> Rehabilitacja mięśnia trójgłowego łydki </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6\">\r\n      <p>\r\n        Podczas pierwszych 24-48 godzin po uszkodzeniu mięśnia najważniejsze jest stosowanie się do metody PRICE, dzięki której ustąpi\r\n        stan zapalny, dzięki czemu skrócony zostanie czas regeneracji i zmniejszy się uczucie bólu.\r\n      </p>\r\n      <ul>\r\n        <li> - P – protection – krótki okres odciążenia oraz usztywnienia miejsca bólu jest wskazany w przypadku większości kontuzji, </li>\r\n        <li> - R – rest – odpoczynek oraz nienadwyrężanie pozwoli na szybszą regeneracje,</li>\r\n        <li> - I – ice – krioterapia spowalnia i zapobiega dalszy obrzęk, zmniejsza ból i skurcz mięśni,</li>\r\n        <li> - C – compression – kompresja, czyli użycie bandażu elastycznego w miejscu urazu pozwala na ograniczenie obrzęku,</li>\r\n        <li> - E – elevation – unoszenie nogi nad poziomem ciała umożliwia odpływ limfy.</li>\r\n      </ul>\r\n      <p>\r\n        Po upływie 5 dni można rozpocząć wykonywanie ćwiczeń wzmacniających zaprezentowanych na filmiku, zaś rozciąganie mięśni można rozpocząć dopiero\r\n        po minięciu 7 dni od powstania urazu.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/OYMwPaCdAo4\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-lg-6 offset-3\">\r\n          <button type=\"button\" (click)=\"addInjury()\" class=\"btn btn-primary btn-block\">Dodaj do listy kontuzji</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-12\">\r\n      <p> Produkty, które zostały użyte na filmiku prezentującym możliwość rehabilitacji: </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/mat\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{mat.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\r\n          <div>\r\n            <p> {{mat.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/roller\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{roller.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\r\n          <div>\r\n            <p> {{roller.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/band\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{band.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\r\n          <div>\r\n            <p> {{band.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/calf/calf.component.ts":
/*!****************************************!*\
  !*** ./src/app/calf/calf.component.ts ***!
  \****************************************/
/*! exports provided: CalfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalfComponent", function() { return CalfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");






var CalfComponent = /** @class */ (function () {
    function CalfComponent(cartService, cookiesService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    CalfComponent.prototype.ngOnInit = function () {
    };
    CalfComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    CalfComponent.prototype.addInjury = function () {
        this.cookiesService.set('dwuglowy', 'true');
    };
    CalfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calf',
            template: __webpack_require__(/*! ./calf.component.html */ "./src/app/calf/calf.component.html"),
            styles: [__webpack_require__(/*! ./calf.component.css */ "./src/app/calf/calf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], CalfComponent);
    return CalfComponent;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartService = /** @class */ (function () {
    function CartService() {
        this.items = [];
        this.summary = 0;
    }
    CartService.prototype.addToCart = function (product) {
        this.items.push(product);
        this.summary = this.summary + product.price;
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clearCart = function () {
        this.items = [];
        return this.items;
    };
    CartService.prototype.countItemPrice = function () {
        return this.items;
    };
    CartService.prototype.getPrice = function () {
        return this.summary;
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\np{\r\n  font-family: \"Helvetica Neue\";\r\n  font-size: 4;\r\n}\r\n\r\n.circle{\r\n  height: 5em;\r\n  width: 5em;\r\n  border-radius: 50%;\r\n  border: 2px solid #004579;\r\n  text-align:center;\r\n  line-height:5em;\r\n}\r\n\r\n.circle:hover{\r\n  filter: drop-shadow(0 0 15px #004579);\r\n  fill: orange;\r\n  transition: filter 1s;\r\n}\r\n\r\nli{\r\n  list-style: none;\r\n  font-family: \"Helvetica Neue\";\r\n  font-size: 4;\r\n}\r\n\r\nsvg {\r\n  background-image: url('human2.PNG');\r\n  background-size: 100% 100%;\r\n}\r\n\r\npath {\r\n  fill: transparent;\r\n  cursor: pointer;\r\n  transition: fill 0.3s;\r\n}\r\n\r\nsvg a:hover path {\r\n fill:  rgba(0, 119, 210, 0.5);\r\n cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxtQ0FBZ0Q7RUFDaEQsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIjtcclxuICBmb250LXNpemU6IDQ7XHJcbn1cclxuXHJcbi5jaXJjbGV7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgd2lkdGg6IDVlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwNDU3OTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBsaW5lLWhlaWdodDo1ZW07XHJcbn1cclxuXHJcbi5jaXJjbGU6aG92ZXJ7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTVweCAjMDA0NTc5KTtcclxuICBmaWxsOiBvcmFuZ2U7XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xyXG59XHJcblxyXG5saXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCI7XHJcbiAgZm9udC1zaXplOiA0O1xyXG59XHJcblxyXG5cclxuc3ZnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvaHVtYW4yLlBORyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxucGF0aCB7XHJcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGZpbGwgMC4zcztcclxufVxyXG5cclxuc3ZnIGE6aG92ZXIgcGF0aCB7XHJcbiBmaWxsOiAgcmdiYSgwLCAxMTksIDIxMCwgMC41KTtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4 mb-4\">\n    <div class=\"col-lg-4\">\n      <div class=\"row\">\n        <div class=\"col-4\">\n          <img src=\"assets/img/ankle.jpg\" class=\"circle\" alt=\"ankle\">\n        </div>\n        <div class=\"col-4\">\n          <img src=\"assets/img/elbow.jpg\" class=\"circle\" alt=\"elbow\">\n        </div>\n        <div class=\"col-4\">\n          <a routerLink=\"/kolano\">\n            <img src=\"assets/img/knee.jpg\" class=\"circle\" alt=\"knee\">\n          </a>\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-12\">\n          <p> Nie od dzisiaj wiadomo, że sport to zdrowie, aczkolwiek jeżeli nie mamy wiedzy teoretycznej jak prawidłowo trzeba biegać lub w jaki sposób wykonywać ćwiczenia na siłowni, to w bardzo prosty sposób możemy narazić się na kontuzje.\nWiele czynników wpływa na to, w jakim stopniu jesteśmy podatni na kontuzje:\n          </p>\n          <ul>\n            <li>- zmęczenie,</li>\n            <li>- stres, </li>\n            <li>- złe odżywianie, </li>\n            <li>- brak odpowiedniej rozgrzewki, </li>\n            <li>- słabo rozciągnięte mięśnie, </li>\n            <li>- źle dobrane buty do treningu, </li>\n            <li>- zbyt duże obciążenie podczas treningu. </li>\n          </ul>\n          <p> Aplikacja pierwszej pomocy ma za zadanie pomóc Ci w intuicyjnym zdiagnozowaniu bolącego miejca oraz\n            udzielić Ci informacji jakie należy podjąć dalsze kroki w leczeniu\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 text-center\">\n      <p> Kliknij w bolące miejsce, aby uzyskać więcej informacji o kontuzji </p>\n       <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 745 640\">\n         <g>\n           <a (click)=\"goTo('/obszerny-boczny')\">\n             <title> mięsień czworogłowy uda </title>\n             <path d=\"M237,336 L231,313 235,310 230,310 226,299 212,355 216,405 229,409 232,403 242,362 238,336 228,305 z\"/>\n             <path d=\"M122,389 L118,364 123,327 132,300 146,362 136,405 128,406 122,391 119,362 z\"  />\n            </a>\n          </g>\n          <g>\n            <a (click)=\"goTo('/lydka')\">\n              <title> mięsień trójgłowy łydki </title>\n              <path d=\"M517,443 L526,455 531,449 538,464 538,480 542,500 541,516 539,531 524,516 510,528 503,516 503,493 504,480 508,457 z\"  />\n              <path d=\"M620,443 L632,457 632,461 635,478 639,497 635,520 629,527 625,523 615,516 606,524 600,530 596,517 599,497 603,478 600,466 610,449 615,454 z\"  />\n              <path d=\"M211,480 L207,501 207,529 212,545 216,566 220,527 221,513 220,492 211,477 z\"  />\n              <path d=\"M140,489 L136,501 140,533 140,583 145,547 152,515 150,498 146,476 z\"  />\n            </a>\n          </g>\n          <g>\n            <a (click)=\"goTo('/dwuglowy-uda')\">\n              <title> mięsień dwugłowy uda </title>\n                  <path d=\"M513,448 L520,439 525,429 525,437 528,442 539,466 545,450 547,431 554,398 548,356 539,357 536,353 526,357 522,357 518,370 515,387 511,405 508,423 508,439 506,455 z\"/>\n                  <path d=\"M610,446 L615,427 620,440 633,454 632,427 628,406 622,372 614,353 600,356 596,355 589,370 588,400 591,407 594,430 596,452 601,466 z\"/>\n            </a>\n          </g>\n          <g>\n            <a (click)=\"goTo('/kolano')\">\n              <title> Wiązadła krzyżowe </title>\n                  <path d=\"M118,455 L123,464 135,465 143,458 144,444 139,436 129,435 120,439 z\"/>\n                  <path d=\"M225,464 L235,461 236,448 235,440 231,433 223,435 216,443 217,458 z\"/>\n            </a>\n          </g>\n          <g>\n            <a (click)=\"goTo('/posladkowy-wielki')\">\n              <title> Mięsień pośladkowy wielki </title>\n                <path d=\"M544,353 L560,347 569,333 571,332 573,340 585,352 596,352 606,348 615,336 622,324 622,298 619,283 614,270 596,268 591,272 581,278 570,300 567,293 556,276 544,268 528,268 520,284 519,308 520,336 531,349 z\"/>\n            </a>\n          </g>\n       </svg>\n       <div class=\"row\">\n         Źródło obrazu: http://www.shapesense.com/images/blank-muscle-anatomy.jpg\n       </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContentComponent = /** @class */ (function () {
    function ContentComponent(router) {
        this.router = router;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.goTo = function (link) {
        this.router.navigate([link]);
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/cookies.service.ts":
/*!************************************!*\
  !*** ./src/app/cookies.service.ts ***!
  \************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");



var CookiesService = /** @class */ (function () {
    function CookiesService(cookieService) {
        this.cookieService = cookieService;
    }
    CookiesService.prototype.check = function (key) {
        return this.cookieService.check(key);
    };
    CookiesService.prototype.get = function (key) {
        // stringify - zamienia stringa w obiekt
        return JSON.parse(this.cookieService.get(key));
    };
    CookiesService.prototype.set = function (key, value, expires) {
        // stringify - zamienia obiekt w stringa
        this.cookieService.set(key, JSON.stringify(value), expires);
    };
    CookiesService.prototype.delete = function (key) {
        this.cookieService.delete(key);
    };
    CookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CookiesService);
    return CookiesService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    // transform(items: any[], searchText: string): any[] {
    //   if (!items) {
    //     return [];
    //   }
    //   if (!searchText) {
    //     return items;
    //   }
    //   searchText = searchText.toLocaleLowerCase();
    //   return items.filter(it => {
    //     return it.toLocaleLowerCase().includes(searchText);
    //  });
    // }
    FilterPipe.prototype.transform = function (arr, prop, value, method) {
        var _this = this;
        if (arr) {
            if (!value) {
                return arr;
            }
            else {
                return arr.filter(function (obj) { return _this.filter(obj[prop], value, method); });
            }
        }
        else {
            return [];
        }
    };
    FilterPipe.prototype.filter = function (source, target, method) {
        switch (method) {
            case "includes": return source.includes(target);
            case "equal": return source === target;
            case "not-equal": return source !== target;
        }
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/floss/floss.component.css":
/*!*******************************************!*\
  !*** ./src/app/floss/floss.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zsb3NzL2Zsb3NzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/floss/floss.component.html":
/*!********************************************!*\
  !*** ./src/app/floss/floss.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <div>\r\n        <h4 class=\"text-center\"> {{floss.name}} </h4>\r\n        <img class=\"img-fluid\" src=\"{{floss.image}}\" alt=\"ball\">\r\n        <div class=\"mt-4\">\r\n          <p> {{floss.description}} </p>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <p class=\"font-weight-bold\"> Cena {{floss.price}} zł </p>\r\n              <p> ilość w magazynie: {{floss.amount}} </p>\r\n            </div>\r\n            <div *ngIf=\"floss.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n              <button type=\"button\" (click)=\"addToCart(floss)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n            </div>\r\n            <ng-template #elseBlock>\r\n              <div class=\"col-lg-6 mb-2 mt-2\">\r\n                <button type=\"button\" (click)=\"addToCart(floss)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n              </div>\r\n            </ng-template>\r\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-primary btn-block\">Powrót</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/floss/floss.component.ts":
/*!******************************************!*\
  !*** ./src/app/floss/floss.component.ts ***!
  \******************************************/
/*! exports provided: FlossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlossComponent", function() { return FlossComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var FlossComponent = /** @class */ (function () {
    function FlossComponent(cartService, location) {
        this.cartService = cartService;
        this.location = location;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    FlossComponent.prototype.ngOnInit = function () {
    };
    FlossComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    FlossComponent.prototype.goBack = function () {
        this.location.back();
    };
    FlossComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-floss',
            template: __webpack_require__(/*! ./floss.component.html */ "./src/app/floss/floss.component.html"),
            styles: [__webpack_require__(/*! ./floss.component.css */ "./src/app/floss/floss.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], FlossComponent);
    return FlossComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  height: 4em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICBoZWlnaHQ6IDRlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light\">\n  <div class=\"row text-center\">\n    <div class=\"col-sm-12 mt-4 mb-4\">\n      Autor: Patryk Budnicki\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gluteus-maximus/gluteus-maximus.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gluteus-maximus/gluteus-maximus.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsdXRldXMtbWF4aW11cy9nbHV0ZXVzLW1heGltdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gluteus-maximus/gluteus-maximus.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gluteus-maximus/gluteus-maximus.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <h1> Rehabilitacja mięśnia pośladkowego wielkiego </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6\">\r\n      <p>\r\n        Podczas pierwszych 24-48 godzin po uszkodzeniu mięśnia najważniejsze jest stosowanie się do metody PRICE, dzięki której ustąpi\r\n        stan zapalny, dzięki czemu skrócony zostanie czas regeneracji i zmniejszy się uczucie bólu.\r\n      </p>\r\n      <ul>\r\n        <li> - P – protection – krótki okres odciążenia oraz usztywnienia miejsca bólu jest wskazany w przypadku większości kontuzji, </li>\r\n        <li> - R – rest – odpoczynek oraz nienadwyrężanie pozwoli na szybszą regeneracje,</li>\r\n        <li> - I – ice – krioterapia spowalnia i zapobiega dalszy obrzęk, zmniejsza ból i skurcz mięśni,</li>\r\n        <li> - C – compression – kompresja, czyli użycie bandażu elastycznego w miejscu urazu pozwala na ograniczenie obrzęku,</li>\r\n        <li> - E – elevation – unoszenie nogi nad poziomem ciała umożliwia odpływ limfy.</li>\r\n      </ul>\r\n      <p>\r\n        Po upływie 5 dni można rozpocząć wykonywanie ćwiczeń wzmacniających zaprezentowanych na filmiku, zaś rozciąganie mięśni można rozpocząć dopiero\r\n        po minięciu 7 dni od powstania urazu.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/opuvtzflh6E\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-lg-6 offset-3\">\r\n          <button type=\"button\" (click)=\"addInjury()\" class=\"btn btn-primary btn-block\">Dodaj do listy kontuzji</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-12\">\r\n      <p> Produkty, które zostały użyte na filmiku prezentującym możliwość rehabilitacji: </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/mat\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{mat.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\r\n          <div>\r\n            <p> {{mat.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/roller\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{roller.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\r\n          <div>\r\n            <p> {{roller.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/band\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{band.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\r\n          <div>\r\n            <p> {{band.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gluteus-maximus/gluteus-maximus.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gluteus-maximus/gluteus-maximus.component.ts ***!
  \**************************************************************/
/*! exports provided: GluteusMaximusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GluteusMaximusComponent", function() { return GluteusMaximusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");






var GluteusMaximusComponent = /** @class */ (function () {
    function GluteusMaximusComponent(cartService, cookiesService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    GluteusMaximusComponent.prototype.ngOnInit = function () {
    };
    GluteusMaximusComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    GluteusMaximusComponent.prototype.addInjury = function () {
        this.cookiesService.set('dwuglowy', 'true');
    };
    GluteusMaximusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gluteus-maximus',
            template: __webpack_require__(/*! ./gluteus-maximus.component.html */ "./src/app/gluteus-maximus/gluteus-maximus.component.html"),
            styles: [__webpack_require__(/*! ./gluteus-maximus.component.css */ "./src/app/gluteus-maximus/gluteus-maximus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], GluteusMaximusComponent);
    return GluteusMaximusComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 1, email: 'admin@admin.pl', password: 'admin123' },
            {
                id: 2, email: 'user@user.pl', password: 'user123', name: 'Patryk', lastname: 'Budnicki', street: 'Kwiatkowskiego 10', houseNr: 15, city: 'Szczecin', province: 'Zachodniopomorskie', zip: '71004'
            }
        ];
        return { users: users };
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/knee/knee.component.css":
/*!*****************************************!*\
  !*** ./src/app/knee/knee.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tuZWUva25lZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/knee/knee.component.html":
/*!******************************************!*\
  !*** ./src/app/knee/knee.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <h1> Rehabilitacja kolana </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6\">\r\n      <p>\r\n        Podczas pierwszych 24-48 godzin po wystąpieniu kontuzji najważniejsze jest stosowanie się do metody PRICE, dzięki której ustąpi\r\n        stan zapalny, dzięki czemu skrócony zostanie czas regeneracji i zmniejszy się uczucie bólu.\r\n      </p>\r\n      <ul>\r\n        <li> - P – protection – krótki okres odciążenia oraz usztywnienia miejsca bólu jest wskazany w przypadku większości kontuzji, </li>\r\n        <li> - R – rest – odpoczynek oraz nienadwyrężanie pozwoli na szybszą regeneracje,</li>\r\n        <li> - I – ice – krioterapia spowalnia i zapobiega dalszy obrzęk, zmniejsza ból i skurcz mięśni,</li>\r\n        <li> - C – compression – kompresja, czyli użycie bandażu elastycznego w miejscu urazu pozwala na ograniczenie obrzęku,</li>\r\n        <li> - E – elevation – unoszenie nogi nad poziomem ciała umożliwia odpływ limfy.</li>\r\n      </ul>\r\n      <p>\r\n        Po upływie 5 dni można rozpocząć wykonywanie ćwiczeń wzmacniających zaprezentowanych na filmiku, zaś rozciąganie mięśni można rozpocząć dopiero\r\n        po minięciu 7 dni od powstania urazu.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/uUER9a0N0UA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-lg-6 offset-3\">\r\n          <button type=\"button\" (click)=\"addInjury()\" class=\"btn btn-primary btn-block\">Dodaj do listy kontuzji</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-12\">\r\n      <p> Produkty, które zostały użyte na filmiku prezentującym możliwość rehabilitacji: </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/mat\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{mat.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\r\n          <div>\r\n            <p> {{mat.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/roller\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{roller.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\r\n          <div>\r\n            <p> {{roller.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/band\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{band.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\r\n          <div>\r\n            <p> {{band.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/knee/knee.component.ts":
/*!****************************************!*\
  !*** ./src/app/knee/knee.component.ts ***!
  \****************************************/
/*! exports provided: KneeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KneeComponent", function() { return KneeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");






var KneeComponent = /** @class */ (function () {
    function KneeComponent(cartService, cookiesService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    KneeComponent.prototype.ngOnInit = function () {
    };
    KneeComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    KneeComponent.prototype.addInjury = function () {
        this.cookiesService.set('dwuglowy', 'true');
    };
    KneeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knee',
            template: __webpack_require__(/*! ./knee.component.html */ "./src/app/knee/knee.component.html"),
            styles: [__webpack_require__(/*! ./knee.component.css */ "./src/app/knee/knee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], KneeComponent);
    return KneeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-login{\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n}\r\n.text-muted{\r\n  color: red !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbG9naW57XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4udGV4dC1tdXRlZHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form class=\"form-login text-center mt-4 mb-4\" [formGroup]=\"loginForm\" (submit)=\"toLogin()\">\r\n  <img class=\"mb-3\" src=\"assets/img/wyleczkontuzje_foto.png\" alt=\"\" width=\"90\" height=\"72\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\">Logowanie</h1>\r\n  <label for=\"iEmail\" class=\"sr-only\">e-mail</label>\r\n  <input type=\"email\" id=\"iEmail\" class=\"form-control mb-3\" placeholder=\"e-mail\" required autofocus formControlName=\"email\">\r\n  <label for=\"iPassword\" class=\"sr-only\">hasło</label>\r\n  <input type=\"password\" id=\"iPassword\" class=\"form-control mb-3\" placeholder=\"hasło\" required formControlName=\"password\">\r\n  <small id=\"loginError\"class=\"form-text text-muted\"> </small> \r\n  <div class=\"checkbox mb-3\">\r\n    <label>\r\n      <input type=\"checkbox\" value=\"remember\"> Zapamiętaj mnie\r\n    </label>\r\n  </div>\r\n  <button class=\"btn btn-primary btn-block\" type=\"submit\">Zaloguj się</button>\r\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookiesService, userService, formBuilder, location) {
        this.cookiesService = cookiesService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.location = location;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.toLogin = function () {
        var _this = this;
        this.cookiesService.delete('token');
        this.loginError = document.getElementById('loginError');
        this.loginError.innerHTML = '';
        this.userService.getUsers().subscribe(function (results) {
            for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                var user = results_1[_i];
                if (user.email === _this.loginForm.value['email'] && user.password === _this.loginForm.value['password']) {
                    _this.cookiesService.set('token', user.email);
                    console.log('poprawnie zalogowano użytkownika');
                    window.alert('Witamy, proces logowania przebiegł pomyślnie.');
                    console.log(_this.cookiesService.get('token'));
                    _this.location.back();
                }
            }
            if (!_this.cookiesService.check('token')) {
                _this.loginError.innerHTML = 'Niepoprawne dane logowania';
                console.error('Niepoprawne dane logowania');
            }
            ;
        });
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mat/mat.component.css":
/*!***************************************!*\
  !*** ./src/app/mat/mat.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdC9tYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mat/mat.component.html":
/*!****************************************!*\
  !*** ./src/app/mat/mat.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4\">\n    <div class=\"col-lg-6 offset-lg-3\">\n      <div>\n        <h4 class=\"text-center\"> {{mat.name}} </h4>\n        <img class=\"img-fluid\" src=\"{{mat.image}}\" alt=\"mat\">\n        <div class=\"mt-4\">\n          <p> {{mat.description}} </p>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n              <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\n              <p> ilość w magazynie: {{mat.amount}} </p>\n            </div>\n            <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n              <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n            </div>\n            <ng-template #elseBlock>\n              <div class=\"col-lg-6 mb-2 mt-2\">\n                <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n              </div>\n            </ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mat/mat.component.ts":
/*!**************************************!*\
  !*** ./src/app/mat/mat.component.ts ***!
  \**************************************/
/*! exports provided: MatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatComponent", function() { return MatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");





var MatComponent = /** @class */ (function () {
    function MatComponent(cartService) {
        this.cartService = cartService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    MatComponent.prototype.ngOnInit = function () {
    };
    MatComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    MatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat',
            template: __webpack_require__(/*! ./mat.component.html */ "./src/app/mat/mat.component.html"),
            styles: [__webpack_require__(/*! ./mat.component.css */ "./src/app/mat/mat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], MatComponent);
    return MatComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner{\r\n  width: 100%;\r\n}\r\n.menu-icon{\r\n  font-size: 3em;\r\n  color: #0078d2;\r\n}\r\n.navbar{\r\n  box-shadow: 0 8px 6px -6px #999;\r\n}\r\n.searchbox{\r\n  width: 15em;\r\n}\r\nul{\r\n  list-style: none;\r\n}\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 195px;\r\n  min-height: 28px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n.search-result li a:hover {\r\n      color: white;\r\n    }\r\n.search-result li a:active {\r\n      color: white;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFHRSwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVFO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHFCQUFxQjtFQUN2QjtBQUVFO01BQ0UsWUFBWTtJQUNkO0FBRUE7TUFDRSxZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1lbnUtaWNvbntcclxuICBmb250LXNpemU6IDNlbTtcclxuICBjb2xvcjogIzAwNzhkMjtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM5OTk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjOTk5O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4ICM5OTk7XHJcbn1cclxuLnNlYXJjaGJveHtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG51bHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIHdpZHRoOiAxOTVweDtcclxuICBtaW4taGVpZ2h0OiAyOHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAgIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\n  <a routerLink=\"/content\">Strona główna</a>\n  <a routerLink=\"/sklep\">Sklep</a>\n  <a routerLink=\"/rejestracja\">Rejestracja</a>\n  <a routerLink=\"/logowanie\">Login</a>\n</nav> -->\n<img src=\"assets/img/baner.png\" class=\"img-fluid banner\" alt=\"baner\">\n<div class=\"fixed-top\">\n <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n   <a class=\"navbar-brand\" routerLink=\"/content\">\n      <img src=\"assets/img/wyleczkontuzje_logo.png\" width=\"230\" height=\"70\" alt=\"logo\">\n    </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <ul class=\"navbar-nav mr-auto\">\n      <a class=\"nav-item nav-link active\" routerLink=\"/content\">Strona główna <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" routerLink=\"/sklep\">Sklep</a>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <input class=\"form-control mr-sm-2 searchbox\" type=\"search\" [(ngModel)]=\"searchText\"  placeholder=\"Wyszukaj kontuzje\">\n      <div *ngIf=\"searchText\">\r\n        <p> Wybierz kontuzje z listy </p>\r\n        <!--   <ul *ngFor=\"let data of dataset | filter: searchText\">\r\n    <li><a routerLink=\"/{{data}}\">{{data}} </a></li>\r\n  </ul> -->\r\n        <ul class=\"search-result\" *ngFor=\"let data of kontuzje | filter: 'nazwa': searchText: 'includes' \">\r\n          <li><a routerLink=\"/{{data.link}}\">{{data.nazwa}} </a></li>\r\n        </ul>\r\n      </div>\r\n    <a routerLink=\"/admin\">\r\n      <fa-icon [icon]=\"faUser\" class=\"d-none d-lg-block menu-icon\"></fa-icon>\r\n    </a><!-- ukrywam ikonę, kiedy szerokość strony odpowiada\r\n    urządzeniom mobilnym -- ikona pobrana z fontawesome, zeby to zrobic najpierw musiałem zainstalować FA, później w wybranym module\r\n  zaimportować ją z @fortawesome/free-solid-svg-icons' -->\r\n        <ng-container *ngIf=\"!cookiesService.check('token'); else userLogged;\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/rejestracja\">Rejestracja</a>\r\n            <a class=\"nav-item nav-link\" routerLink=\"/logowanie\">Logowanie</a>\r\n          </li>\r\n        </ng-container>\r\n\r\n        <ng-template #userLogged>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-item nav-link\" routerLink=\"/konto\">Moje konto</a>\r\n            <a class=\"nav-item nav-link\" (click)=\"logout()\">Wyloguj</a>\r\n          </li>\r\n        </ng-template>\r\n</ul>\n  </div>\n </nav>\n <a routerLink=\"/koszyk\">\n   <fa-icon [icon]=\"faShoppingCart\" class=\"menu-icon float-right\"></fa-icon>\n </a>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _zbior_kontuzje__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zbior-kontuzje */ "./src/app/zbior-kontuzje.ts");






var MenuComponent = /** @class */ (function () {
    function MenuComponent(cookiesService) {
        this.cookiesService = cookiesService;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingCart"];
        this.kontuzje = _zbior_kontuzje__WEBPACK_IMPORTED_MODULE_4__["KONTUZJE"];
        this.dataset = ['kolano', 'dwuglowy-uda', 'obszerny-boczny', 'posladkowy-wielki', 'wiązadła-krzyżowe', 'lydka'];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        window.alert('Zostałeś poprawnie wylogowany');
        this.cookiesService.delete('token');
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/mock-product.ts":
/*!*********************************!*\
  !*** ./src/app/mock-product.ts ***!
  \*********************************/
/*! exports provided: FLOSS, BAND, BALL, MAT, ROLLER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOSS", function() { return FLOSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAND", function() { return BAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BALL", function() { return BALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT", function() { return MAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLLER", function() { return ROLLER; });
var FLOSS = {
    name: 'Floss Band',
    price: 20,
    shortdescription: 'Idealny do rozbijania powięzi',
    description: 'Idealny do rozbijania powiezi',
    image: 'assets/img/products/floss.jpg',
    amount: 0
};
var BAND = {
    name: 'Gumy do ćwiczeń',
    price: 30,
    shortdescription: 'Idealna do treningu z regulowanym obciążeniem',
    description: 'Idealna do treningu rehabilitacyjnego, czerwona daje większe obciążenie, zaś niebieska mniejsze obciążenie. Wykonuj ćwiczenia zgodnie z filmikami nagranymi przez fizjoterapeutę',
    image: 'assets/img/products/band.jpg',
    amount: 12
};
var BALL = {
    name: 'Kauczukowa Piłeczka',
    price: 15,
    shortdescription: 'Idealna do rozluźniania miejscowego',
    description: 'Idealna do rozluźniania bolącego miejsca, dociera w najgłębszy ból. Pozwala na rozklejanie powięzi, które powodują duży ból.',
    image: 'assets/img/products/ball.jpg',
    amount: 2
};
var MAT = {
    name: 'Mata do ćwiczeń',
    price: 100,
    shortdescription: 'Idealne miejsce do ćwiczeń',
    description: 'Niezbędnik w każdym domu, to właśnie na niej wykonujemy większość ćwiczeń',
    image: 'assets/img/products/mat.jpg',
    amount: 17
};
var ROLLER = {
    name: 'Roller',
    price: 100,
    shortdescription: 'Idealny do rozluźniania mięśni',
    description: 'Roller umożliwia nam rozluźnianie dużych mięśni, niweluje bół oraz zakwasy',
    image: 'assets/img/products/roller.jpg',
    amount: 10
};


/***/ }),

/***/ "./src/app/myaccount/myaccount.component.css":
/*!***************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n  list-style: none;\r\n}\r\n.loginbutton {\r\n  margin-left: 1em;\r\n  min-width: 2em;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background-color: #004579;\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\ninput {\r\n  margin: 0.3em;\r\n  border-radius: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhY2NvdW50L215YWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbXlhY2NvdW50L215YWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubG9naW5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWluLXdpZHRoOiAyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NTc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDAuM2VtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.html":
/*!****************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h2>Lista Twoich kontuzji:</h2> \r\n      <ul>\r\n        <ng-container *ngIf=\"cookiesService.check('obszerny'); else userObszerny;\">\r\n          <li> Mięsień czworogłowy uda </li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let user of users\">\r\n      <h2>Twoje dane:</h2>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Email:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.email\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Imię:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.name\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Nazwisko:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.lastname\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Ulica:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.street\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Numer mieszkania:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.houseNr\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Miasto:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.city\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Województwo:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.province\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2 text-right\">\r\n          Kod pocztowy:\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <input [(ngModel)]=\"user.zip\" />\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"loginbutton\" title=\"zapisz użytkownika\" (click)=\"save(user)\">Zapisz</button>\r\n\r\n    </li>\r\n  </ul>\r\n</div>\n"

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.ts ***!
  \**************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent(cookiesService, userService) {
        this.cookiesService = cookiesService;
        this.userService = userService;
        this.str2 = this.cookiesService.get('token').slice(0, this.cookiesService.get('token').indexOf('@'));
    }
    MyaccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    MyaccountComponent.prototype.getInjury = function () {
        this.cookiesService.get('obszerny');
    };
    //this.cookiesService.get('token')
    MyaccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.str2)
            .subscribe(function (users) { return _this.users = users; });
    };
    MyaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myaccount',
            template: __webpack_require__(/*! ./myaccount.component.html */ "./src/app/myaccount/myaccount.component.html"),
            styles: [__webpack_require__(/*! ./myaccount.component.css */ "./src/app/myaccount/myaccount.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cookies_service__WEBPACK_IMPORTED_MODULE_2__["CookiesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/obszerny-boczny/obszerny-boczny.component.css":
/*!***************************************************************!*\
  !*** ./src/app/obszerny-boczny/obszerny-boczny.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n  list-style: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JzemVybnktYm9jem55L29ic3plcm55LWJvY3pueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvb2JzemVybnktYm9jem55L29ic3plcm55LWJvY3pueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/obszerny-boczny/obszerny-boczny.component.html":
/*!****************************************************************!*\
  !*** ./src/app/obszerny-boczny/obszerny-boczny.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row mt-4\">\n     <div class=\"col-12 text-center\">\n       <h1> Rehabilitacja mięśnia czworogłowego uda </h1>\n     </div>\n   </div>\n   <div class=\"row mt-4\">\n     <div class=\"col-lg-6\">\n       <p> Podczas pierwszych 24-48 godzin po uszkodzeniu mięśnia najważniejsze jest stosowanie się do metody PRICE, dzięki której ustąpi\n         stan zapalny, dzięki czemu skrócony zostanie czas regeneracji i zmniejszy się uczucie bólu.\n       </p>\n       <ul>\n         <li> - P – protection – krótki okres odciążenia oraz usztywnienia miejsca bólu jest wskazany w przypadku większości kontuzji, </li>\n         <li> - R – rest – odpoczynek oraz nienadwyrężanie pozwoli na szybszą regeneracje,</li>\n         <li> - I – ice – krioterapia spowalnia i zapobiega dalszy obrzęk, zmniejsza ból i skurcz mięśni,</li>\n         <li> - C – compression – kompresja, czyli użycie bandażu elastycznego w miejscu urazu pozwala na ograniczenie obrzęku,</li>\n         <li> - E – elevation – unoszenie nogi nad poziomem ciała umożliwia odpływ limfy.</li>\n       </ul>\n       <p>\n         Po upływie 5 dni można rozpocząć wykonywanie ćwiczeń wzmacniających zaprezentowanych na filmiku, zaś rozciąganie mięśni można rozpocząć dopiero\n         po minięciu 7 dni od powstania urazu.\n       </p>\n     </div>\n     <div class=\"col-lg-6\">\n       <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/419TQeudtIU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n       <div class=\"row mt-4\">\n         <div class=\"col-lg-6 offset-3\">\n           <button type=\"button\" (click)=\"addInjury()\" class=\"btn btn-primary btn-block\">Dodaj do listy kontuzji</button>\n         </div>\n       </div>\n     </div>\n   </div>\n   <div class=\"row mt-4\">\n     <div class=\"col-lg-12\">\n       <p> Produkty, które zostały użyte na filmiku prezentującym możliwość rehabilitacji: </p>\n     </div>\n   </div>\n   <div class=\"row mt-4\">\n     <div class=\"col-lg-4\">\n       <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n         <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n       </div>\n       <ng-template #elseBlock>\n         <div class=\"col-lg-6 mb-2 mt-2\">\n           <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n         </div>\n       </ng-template>\n       <a routerLink=\"/mat\" class=\"product-link\">\n         <div class=\"product-area text-center\">\n           <h4> {{mat.name}} </h4>\n           <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\n           <div>\n             <p> {{mat.shortdescription}} </p>\n             <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\n           </div>\n         </div>\n       </a>\n     </div>\n\n     <div class=\"col-lg-4\">\n       <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n         <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n       </div>\n       <ng-template #elseBlock>\n         <div class=\"col-lg-6 mb-2 mt-2\">\n           <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n         </div>\n       </ng-template>\n       <a routerLink=\"/roller\" class=\"product-link\">\n         <div class=\"product-area text-center\">\n           <h4> {{roller.name}} </h4>\n           <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\n           <div>\n             <p> {{roller.shortdescription}} </p>\n             <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\n           </div>\n         </div>\n       </a>\n     </div>\n\n     <div class=\"col-lg-4\">\n       <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n         <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n       </div>\n       <ng-template #elseBlock>\n         <div class=\"col-lg-6 mb-2 mt-2\">\n           <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n         </div>\n       </ng-template>\n       <a routerLink=\"/band\" class=\"product-link\">\n         <div class=\"product-area text-center\">\n           <h4> {{band.name}} </h4>\n           <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\n           <div>\n             <p> {{band.shortdescription}} </p>\n             <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\n           </div>\n         </div>\n       </a>\n     </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/obszerny-boczny/obszerny-boczny.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/obszerny-boczny/obszerny-boczny.component.ts ***!
  \**************************************************************/
/*! exports provided: ObszernyBocznyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObszernyBocznyComponent", function() { return ObszernyBocznyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");






var ObszernyBocznyComponent = /** @class */ (function () {
    function ObszernyBocznyComponent(cartService, cookiesService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    ObszernyBocznyComponent.prototype.ngOnInit = function () {
    };
    ObszernyBocznyComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    ObszernyBocznyComponent.prototype.addInjury = function () {
        this.cookiesService.set('obszerny', 'true');
    };
    ObszernyBocznyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-obszerny-boczny',
            template: __webpack_require__(/*! ./obszerny-boczny.component.html */ "./src/app/obszerny-boczny/obszerny-boczny.component.html"),
            styles: [__webpack_require__(/*! ./obszerny-boczny.component.css */ "./src/app/obszerny-boczny/obszerny-boczny.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], ObszernyBocznyComponent);
    return ObszernyBocznyComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-registration{\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n.text-muted{\r\n  color: red !important;\r\n}\r\n.error{\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tcmVnaXN0cmF0aW9ue1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnRleHQtbXV0ZWR7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcbi5lcnJvcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mb-4 mt-4\">\n    <div class=\"col\">\n      Pola oznaczone * są obowiązkowe\n    </div>\n  </div>\n\n  <form class=\"form-registration mb-4 mt-4\" [formGroup]=\"registrationForm\" (submit)=\"register()\">\n    <img class=\"mb-3 mx-auto d-block\" src=\"assets/img/wyleczkontuzje_foto.png\" alt=\"\" width=\"90\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal text-center\">Rejestracja</h1>\n    <div class=\"form-group\">\n      <label for=\"remail\">E-mail *</label>\n      <input type=\"email\" class=\"form-control\" id=\"remail\" placeholder=\"Wpisz swój email\" formControlName=\"email\" required>\n      <ng-container *ngIf=\"registrationForm.controls['email'].touched && registrationForm.hasError('emailNotValidate')\">\n        <small class=\"form-text text-muted\">\r\n          Wpisz poprawny email\r\n        </small>\n      </ng-container>\n    </div>\n\n    <div class=\"form-group\">\r\n      <label for=\"password\">Hasło *</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Wpisz swoje hasło\" formControlName=\"password\" (blur)=\"walidacjaHaslo()\">\r\n       <small id=\"passwordError\" class=\"form-text text-muted\"> </small> \r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password2\">Powtórz hasło *</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"password2\" placeholder=\"Wpisz ponownie swoje hasło\" (blur)=\"walidacjaPowtorzHaslo()\" required>\r\n    <small id=\"repeatPasswordError\" class=\"form-text text-muted\"> </small> \r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"name\">Imię</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Podaj swoje imie\" (blur)=\"walidacjaImie()\" >\r\n      <small id=\"imieError\" class=\"form-text text-muted\"> </small>\r\n\r\n    </div>\r\n   <div class=\"form-group col-md-6\">\r\n     <label for=\"lastname\">Nazwisko</label>\r\n     <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Podaj swoje nazwisko\" (blur)=\"walidacjaNazwisko()\">\r\n     <small id=\"nazwiskoError\" class=\"form-text text-muted\"> </small>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-8\">\r\n      <label for=\"street\">Ulica, numer bloku</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"street\" placeholder=\"Podaj swój adres\">\r\n    </div>\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"homenumber\">Numer mieszkania</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"homenumber\" placeholder=\"Podaj numer mieszkania\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-5\">\r\n      <label for=\"city\">Miasto</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Podaj miasto\" (blur)=\"walidacjaMiasto()\">\r\n      <small id=\"cityError\" class=\"form-text text-muted\"> </small>\r\n      </div>\r\n    <div class=\"form-group col-md-5\">\r\n      <label for=\"rcounty\">Województwo</label>\r\n      <select id=\"rcounty\" class=\"form-control\">\r\n        <option selected> Wybierz... </option>\r\n        <option> Dolnośląskie </option>\r\n        <option> Kujawsko-pomorskie </option>\r\n        <option> Lubelskie </option>\r\n        <option> Lubuskie </option>\r\n        <option> Łódzkie </option>\r\n        <option> Małopolskie </option>\r\n        <option> Mazowieckie </option>\r\n        <option> Oposkie </option>\r\n        <option> Podkarpackie </option>\r\n        <option> Podlaskie </option>\r\n        <option> Pomorskie </option>\r\n        <option> Śląskie </option>\r\n        <option> Świętokrzyskie </option>\r\n        <option> Warmińsko-mazurskie </option>\r\n        <option> Wielkopolskie </option>\r\n        <option> Zachodniopomorskie </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group col-md-2\">\r\n      <label for=\"postalcode\">Kod pocztowy</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"postalcode\" placeholder=\"Kod pocztowy\" (blur)=\"walidacjaKodPocztowy()\">\r\n      <small id=\"postalCodeError\" class=\"form-text text-muted\"> </small>\r\n      </div>\n    </div>\n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" value=\"remember\"> Zapamiętaj mnie\n      </label>\n    </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!registrationForm.valid\">Zarejestruj się</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.passwordRegex = new RegExp("^((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9]))");
        this.postalCodeRegex = new RegExp("^\\d{2}[-]{1}\\d{3}$");
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegistrationComponent.prototype.register = function () {
        console.log('registrationForm', this.registrationForm.value);
        this.userService.addUser(this.registrationForm.value).subscribe(function (data) {
            window.alert('Rejestracja przebiegła pomyślnie! Użyj swoich danych do zalogowania się');
        });
        this.router.navigate(['/content']);
    };
    RegistrationComponent.prototype.createForm = function () {
        this.registrationForm = this.formBuilder.group({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
            validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                this.emailValidate('email')
            ])
        });
    };
    RegistrationComponent.prototype.emailValidate = function (emailProp) {
        var _this = this;
        return function (group) {
            if (_this.regexpEmail) {
                var email = group.controls[emailProp];
                var checkedEmail = _this.regexpEmail.test(String(email.value).toLowerCase());
                if (!checkedEmail && email.value.length > 0) {
                    return {
                        emailNotValidate: true
                    };
                }
            }
        };
    };
    RegistrationComponent.prototype.walidacjaImie = function () {
        this.name = document.getElementById('name');
        this.bladName = document.getElementById('imieError');
        this.errName = '';
        if (this.name.value == '') {
            this.errName = '';
        }
        if (this.name.value.length < 3) {
            if (this.errName == '')
                this.errName = 'Imie musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.name.value))
            if (this.errName == '')
                this.errName = 'Imie może składać się tylko z liter';
        this.bladName.innerHTML = this.errName;
    };
    RegistrationComponent.prototype.walidacjaHaslo = function () {
        this.password = document.getElementById('password');
        this.bladPassword = document.getElementById('passwordError');
        this.errPassword = '';
        if (this.password.value == '') {
            this.errPassword = 'Pole nie może być puste';
        }
        if (this.password.value.length < 8) {
            if (this.errPassword == '')
                this.errPassword = 'Hasło musi zawierać conajmniej 8 znaków';
        }
        if (!this.passwordRegex.test(this.password.value)) {
            if (this.errPassword == '')
                this.errPassword = 'Hasło musi zawierać conajmniej 8 znaków w tym jedną cyfrę ';
        }
        this.bladPassword.innerHTML = this.errPassword;
    };
    RegistrationComponent.prototype.walidacjaPowtorzHaslo = function () {
        this.password = document.getElementById('password');
        this.password2 = document.getElementById('password2');
        this.bladPassword2 = document.getElementById('repeatPasswordError');
        this.errPassword2 = '';
        if (this.password2.value != this.password.value) {
            this.errPassword2 = 'Hasła różnią się od siebie';
        }
        this.bladPassword2.innerHTML = this.errPassword2;
    };
    RegistrationComponent.prototype.walidacjaNazwisko = function () {
        this.lastname = document.getElementById('lastname');
        this.bladLastname = document.getElementById('nazwiskoError');
        this.errLastname = '';
        if (this.lastname.value == '') {
            this.errLastname = '';
        }
        if (this.lastname.value.length < 3) {
            if (this.errLastname == '')
                this.errLastname = 'Nazwisko musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.lastname.value))
            if (this.errLastname == '')
                this.errLastname = 'Nazwisko może składać się tylko z liter';
        this.bladLastname.innerHTML = this.errLastname;
    };
    RegistrationComponent.prototype.walidacjaMiasto = function () {
        this.city = document.getElementById('city');
        this.bladCity = document.getElementById('cityError');
        this.errCity = '';
        if (this.city.value == '') {
            this.errCity = '';
        }
        if (this.city.value.length < 3) {
            if (this.errCity == '')
                this.errCity = 'Nazwa miasta musi składać się conajmniej z 3 znaków';
        }
        if (!/^[a-zA-Z]*$/g.test(this.city.value))
            if (this.errCity == '')
                this.errCity = 'Nazwa miasta może składać się tylko z liter';
        this.bladCity.innerHTML = this.errCity;
    };
    RegistrationComponent.prototype.walidacjaKodPocztowy = function () {
        this.postalcode = document.getElementById('postalcode');
        this.bladPostalCode = document.getElementById('postalCodeError');
        this.errPostalCode = '';
        if (!this.postalCodeRegex.test(this.postalcode.value)) {
            if (this.errPostalCode == '')
                this.errPostalCode = 'Nieprawidłowy kod pocztowy';
        }
        this.bladPostalCode.innerHTML = this.errPostalCode;
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/roller/roller.component.css":
/*!*********************************************!*\
  !*** ./src/app/roller/roller.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGxlci9yb2xsZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/roller/roller.component.html":
/*!**********************************************!*\
  !*** ./src/app/roller/roller.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <div>\r\n        <h4 class=\"text-center\"> {{roller.name}} </h4>\r\n        <img class=\"img-fluid\" src=\"{{roller.image}}\" alt=\"roller\">\r\n        <div class=\"mt-4\">\r\n          <p> {{roller.description}} </p>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\r\n              <p> ilość w magazynie: {{roller.amount}} </p>\r\n            </div>\r\n            <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n              <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n            </div>\r\n            <ng-template #elseBlock>\r\n              <div class=\"col-lg-6 mb-2 mt-2\">\r\n                <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n              </div>\r\n            </ng-template>\r\n            <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-primary btn-block\">Powrót</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roller/roller.component.ts":
/*!********************************************!*\
  !*** ./src/app/roller/roller.component.ts ***!
  \********************************************/
/*! exports provided: RollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerComponent", function() { return RollerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var RollerComponent = /** @class */ (function () {
    function RollerComponent(cartService, location) {
        this.cartService = cartService;
        this.location = location;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    RollerComponent.prototype.ngOnInit = function () {
    };
    RollerComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    RollerComponent.prototype.goBack = function () {
        this.location.back();
    };
    RollerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roller',
            template: __webpack_require__(/*! ./roller.component.html */ "./src/app/roller/roller.component.html"),
            styles: [__webpack_require__(/*! ./roller.component.css */ "./src/app/roller/roller.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], RollerComponent);
    return RollerComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/semitendinosus/semitendinosus.component.css":
/*!*************************************************************!*\
  !*** ./src/app/semitendinosus/semitendinosus.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbWl0ZW5kaW5vc3VzL3NlbWl0ZW5kaW5vc3VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/semitendinosus/semitendinosus.component.html":
/*!**************************************************************!*\
  !*** ./src/app/semitendinosus/semitendinosus.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-12 text-center\">\r\n      <h1> Rehabilitacja dwugłowego uda </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-6\">\r\n      <p>\r\n        Podczas pierwszych 24-48 godzin po uszkodzeniu mięśnia najważniejsze jest stosowanie się do metody PRICE, dzięki której ustąpi\r\n        stan zapalny, dzięki czemu skrócony zostanie czas regeneracji i zmniejszy się uczucie bólu.\r\n      </p>\r\n      <ul>\r\n        <li> - P – protection – krótki okres odciążenia oraz usztywnienia miejsca bólu jest wskazany w przypadku większości kontuzji, </li>\r\n        <li> - R – rest – odpoczynek oraz nienadwyrężanie pozwoli na szybszą regeneracje,</li>\r\n        <li> - I – ice – krioterapia spowalnia i zapobiega dalszy obrzęk, zmniejsza ból i skurcz mięśni,</li>\r\n        <li> - C – compression – kompresja, czyli użycie bandażu elastycznego w miejscu urazu pozwala na ograniczenie obrzęku,</li>\r\n        <li> - E – elevation – unoszenie nogi nad poziomem ciała umożliwia odpływ limfy.</li>\r\n      </ul>\r\n      <p>\r\n        Po upływie 5 dni można rozpocząć wykonywanie ćwiczeń wzmacniających zaprezentowanych na filmiku, zaś rozciąganie mięśni można rozpocząć dopiero\r\n        po minięciu 7 dni od powstania urazu.\r\n      </p>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FMcyd1FqPvI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      <div class=\"row mt-4\">\r\n        <div class=\"col-lg-6 offset-3\">\r\n          <button type=\"button\" (click)=\"addInjury()\" class=\"btn btn-primary btn-block\">Dodaj do listy kontuzji</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-12\">\r\n      <p> Produkty, które zostały użyte na filmiku prezentującym możliwość rehabilitacji: </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-4\">\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/mat\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{mat.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\r\n          <div>\r\n            <p> {{mat.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/roller\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{roller.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\r\n          <div>\r\n            <p> {{roller.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\">\r\n      <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\r\n        <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n      </div>\r\n      <ng-template #elseBlock>\r\n        <div class=\"col-lg-6 mb-2 mt-2\">\r\n          <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\r\n        </div>\r\n      </ng-template>\r\n      <a routerLink=\"/band\" class=\"product-link\">\r\n        <div class=\"product-area text-center\">\r\n          <h4> {{band.name}} </h4>\r\n          <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\r\n          <div>\r\n            <p> {{band.shortdescription}} </p>\r\n            <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\r\n          </div>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/semitendinosus/semitendinosus.component.ts":
/*!************************************************************!*\
  !*** ./src/app/semitendinosus/semitendinosus.component.ts ***!
  \************************************************************/
/*! exports provided: SemitendinosusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemitendinosusComponent", function() { return SemitendinosusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");






var SemitendinosusComponent = /** @class */ (function () {
    function SemitendinosusComponent(cartService, cookiesService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    SemitendinosusComponent.prototype.ngOnInit = function () {
    };
    SemitendinosusComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    SemitendinosusComponent.prototype.addInjury = function () {
        this.cookiesService.set('dwuglowy', 'true');
    };
    SemitendinosusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-semitendinosus',
            template: __webpack_require__(/*! ./semitendinosus.component.html */ "./src/app/semitendinosus/semitendinosus.component.html"),
            styles: [__webpack_require__(/*! ./semitendinosus.component.css */ "./src/app/semitendinosus/semitendinosus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]])
    ], SemitendinosusComponent);
    return SemitendinosusComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.product-link {\r\n  color: black;\r\n  text-decoration: none\r\n}\r\n.product-area{\r\n  height: 25em;\r\n  border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n}\r\na.product-link :hover{\r\n  background-color: #ddd;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5wcm9kdWN0LWxpbmsge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG4ucHJvZHVjdC1hcmVhe1xyXG4gIGhlaWdodDogMjVlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5hLnByb2R1Y3QtbGluayA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4\">\n    <div class=\"col-lg-4\">\n      <div *ngIf=\"floss.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n        <button type=\"button\" (click)=\"addToCart(floss)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"col-lg-6 mb-2 mt-2\">\n          <button type=\"button\" (click)=\"addToCart(floss)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n        </div>\n      </ng-template>\n      <a routerLink=\"/floss\" class=\"product-link\">\n        <div class=\"product-area text-center\">\n          <h4> {{floss.name}} </h4>\n          <img class=\"img-fluid product-image\" src=\"{{floss.image}}\" alt=\"floss\">\n          <div>\n            <p> {{floss.shortdescription}} </p>\n            <p class=\"font-weight-bold\"> Cena {{floss.price}} zł </p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <div *ngIf=\"band.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n        <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"col-lg-6 mb-2 mt-2\">\n          <button type=\"button\" (click)=\"addToCart(band)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n        </div>\n      </ng-template>\n      <a routerLink=\"/band\" class=\"product-link\">\n        <div class=\"product-area text-center\">\n          <h4> {{band.name}} </h4>\n          <img class=\"img-fluid product-image\" src=\"{{band.image}}\" alt=\"floss\">\n          <div>\n            <p> {{band.shortdescription}} </p>\n            <p class=\"font-weight-bold\"> Cena {{band.price}} zł </p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <div *ngIf=\"ball.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n        <button type=\"button\" (click)=\"addToCart(ball)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"col-lg-6 mb-2 mt-2\">\n          <button type=\"button\" (click)=\"addToCart(ball)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n        </div>\n      </ng-template>\n      <a routerLink=\"/ball\" class=\"product-link\">\n        <div class=\"product-area text-center\">\n          <h4> {{ball.name}} </h4>\n          <img class=\"img-fluid product-image\" src=\"{{ball.image}}\" alt=\"ball\">\n          <div>\n            <p> {{ball.shortdescription}} </p>\n            <p class=\"font-weight-bold\"> Cena {{ball.price}} zł </p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"row mt-4\">\n    <div class=\"col-lg-4\">\n      <div *ngIf=\"mat.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n        <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"col-lg-6 mb-2 mt-2\">\n          <button type=\"button\" (click)=\"addToCart(mat)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n        </div>\n      </ng-template>\n      <a routerLink=\"/mat\" class=\"product-link\">\n        <div class=\"product-area text-center\">\n          <h4> {{mat.name}} </h4>\n          <img class=\"img-fluid product-image\" src=\"{{mat.image}}\" alt=\"mat\">\n          <div>\n            <p> {{mat.shortdescription}} </p>\n            <p class=\"font-weight-bold\"> Cena {{mat.price}} zł </p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <div *ngIf=\"roller.amount > 0; else elseBlock\" class=\"col-lg-6 mb-2 mt-2\">\n        <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\"><fa-icon [icon]=\"faShoppingCart\"></fa-icon> Do koszyka</button>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"col-lg-6 mb-2 mt-2\">\n          <button type=\"button\" (click)=\"addToCart(roller)\" class=\"btn btn-primary\" title=\"Brak produktu w magazynie!\" disabled><fa-icon [icon]=\"faShoppingCart\" ></fa-icon> Do koszyka</button>\n        </div>\n      </ng-template>\n      <a routerLink=\"/roller\" class=\"product-link\">\n        <div class=\"product-area text-center\">\n          <h4> {{roller.name}} </h4>\n          <img class=\"img-fluid product-image\" src=\"{{roller.image}}\" alt=\"roller\">\n          <div>\n            <p> {{roller.shortdescription}} </p>\n            <p class=\"font-weight-bold\"> Cena {{roller.price}} zł </p>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-product */ "./src/app/mock-product.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");





var ShopComponent = /** @class */ (function () {
    function ShopComponent(cartService) {
        this.cartService = cartService;
        this.floss = _mock_product__WEBPACK_IMPORTED_MODULE_2__["FLOSS"];
        this.band = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BAND"];
        this.ball = _mock_product__WEBPACK_IMPORTED_MODULE_2__["BALL"];
        this.mat = _mock_product__WEBPACK_IMPORTED_MODULE_2__["MAT"];
        this.roller = _mock_product__WEBPACK_IMPORTED_MODULE_2__["ROLLER"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faShoppingCart"];
    }
    ShopComponent.prototype.ngOnInit = function () {
    };
    ShopComponent.prototype.addToCart = function (product) {
        window.alert('Dodałeś produkt do koszyka!');
        this.cartService.addToCart(product);
        product.amount--;
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item{\r\n  background-color: #ddd;\r\n  display: flex;\r\n  width: 15em;\r\n  padding: 0.7em;\r\n  justify-content: space-between;\r\n  border-radius: 5px;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\n.loginbutton {\r\n  margin-left: 1em;\r\n  min-width: 2em;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background-color: #004579;\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\ninput {\r\n  margin: 0.3em;\r\n  border-radius: 6px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTVlbTtcclxuICBwYWRkaW5nOiAwLjdlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubG9naW5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgbWluLXdpZHRoOiAyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NTc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDAuM2VtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-4 mb-4\">\n    <div class=\"col-lg-4 offset-md-4\">\n      <h3>Twoje produkty</h3>\n      <div class=\"row\">\n        <div class=\"col-2\">\n          Nazwa:\n        </div>\n        <div class=\"col-6 text-right\">\n          Cena:\n        </div>\n      </div>\n      <div class=\"item mt-4\" *ngFor=\"let item of items\">\n        <span>{{ item.name }}</span>\n        <span>{{ item.price }}</span>\n      </div>\n      <div class=\"row\" *ngIf='summary'>\n        <div class=\"col-12\">\n          <p> Łączna kwota:  {{summary}} </p>\n         </div>\n      </div>\n      <button type=\"button\" (click)=\"onClear()\" class=\"btn btn-primary mt-4\"> Wyczyść koszyk </button>\n    </div>\n  </div>\n  <div class=\"row\">\r\n    <ng-container *ngIf=\"cookiesService.check('token')\">\r\n      <div class=\"col-12\">\r\n        <h3>Dane do wysyłki</h3>\r\n        <ul>\r\n          <li *ngFor=\"let user of users\">\r\n            <div class=\"row mt-3\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Email:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.email\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Imię:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.name\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Nazwisko:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.lastname\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Ulica:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.street\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Numer mieszkania:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.houseNr\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Miasto:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.city\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Województwo:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.province\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2 text-right\">\r\n                Kod pocztowy:\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <input [(ngModel)]=\"user.zip\" />\r\n              </div>\r\n            </div>\r\n            <button class=\"loginbutton\" title=\"Zamów\" (click)=\"order()\">Zamów</button>\r\n\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </ng-container>\r\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoppingcart/shoppingcart.component.ts ***!
  \********************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cookies.service */ "./src/app/cookies.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");





var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent(cartService, cookiesService, userService) {
        this.cartService = cartService;
        this.cookiesService = cookiesService;
        this.userService = userService;
        this.str2 = this.cookiesService.get('token').slice(0, this.cookiesService.get('token').indexOf('@'));
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        this.items = this.cartService.getItems();
        this.summary = this.cartService.getPrice();
        this.getUser();
    };
    ShoppingcartComponent.prototype.onClear = function () {
        this.items = this.cartService.clearCart();
        this.summary = 0;
    };
    ShoppingcartComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.str2)
            .subscribe(function (users) { return _this.users = users; });
    };
    ShoppingcartComponent.prototype.order = function () {
        this.onClear();
        window.alert('Twoje zamówienie zostało przekazane do działu administracji.');
    };
    ShoppingcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoppingcart',
            template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__(/*! ./shoppingcart.component.css */ "./src/app/shoppingcart/shoppingcart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _cookies_service__WEBPACK_IMPORTED_MODULE_3__["CookiesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/app/user.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'api/users';
        this.userUrl = 'api/users?email=^';
        this.user = _user__WEBPACK_IMPORTED_MODULE_2__["User"];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    UserService.prototype.getUser = function (mail) {
        return this.http.get(this.userUrl + mail);
    };
    UserService.prototype.updateUser = function (user) {
        console.log(user); //przekazuje prawidlowo
        return this.http.put(this.usersUrl + '/' + user.id, user, this.httpOptions);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.usersUrl + '/' + id, this.httpOptions);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(this.usersUrl, user, this.httpOptions);
    };
    UserService.prototype.getFilteredUsers = function (email) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('email', '^' + email);
        return this.http.get(this.usersUrl, { params: httpParams });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/zbior-kontuzje.ts":
/*!***********************************!*\
  !*** ./src/app/zbior-kontuzje.ts ***!
  \***********************************/
/*! exports provided: KONTUZJE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KONTUZJE", function() { return KONTUZJE; });
var KONTUZJE = [
    { id: 1, nazwa: "kolano", link: "kolano" },
    { id: 2, nazwa: "wiązadło", link: "kolano" },
    { id: 3, nazwa: "rzepka", link: "kolano" },
    { id: 4, nazwa: "wiazadlo", link: "kolano" },
    { id: 5, nazwa: "bol kolana", link: "kolano" },
    { id: 6, nazwa: "ból kolana", link: "kolano" },
    { id: 7, nazwa: "udo", link: "obszerny-boczny" },
    { id: 8, nazwa: "czworogłowy uda", link: "obszerny-boczny" },
    { id: 9, nazwa: "mięsień czworogłowy uda", link: "obszerny-boczny" },
    { id: 10, nazwa: "ból uda", link: "obszerny-boczny" },
    { id: 11, nazwa: "obszerny boczny", link: "obszerny-boczny" },
    { id: 12, nazwa: "dwugłowy uda", link: "dwuglowy-uda" },
    { id: 13, nazwa: "mięsień dwugłowy uda", link: "dwuglowy-uda" },
    { id: 14, nazwa: "tył uda", link: "dwuglowy-uda" },
    { id: 15, nazwa: "pośladkowy wielki", link: "posladkowy-wielki" },
    { id: 16, nazwa: "mięsień pośladkowy wielki", link: "posladkowy-wielki" },
    { id: 17, nazwa: "pośladek", link: "posladkowy-wielki" },
    { id: 18, nazwa: "ból pośladka", link: "posladkowy-wielki" },
    { id: 19, nazwa: "ból łydki", link: "lydka" },
    { id: 20, nazwa: "ból lydki", link: "lydka" },
    { id: 21, nazwa: "trójgłowy", link: "lydka" },
];
//dwuglowy-uda', 'obszerny-boczny', 'posladkowy-wielki', 'wiązadła-krzyżowe', 'lydka
//DZIAŁAAA!!!


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Patryk\Desktop\smieci\angular\wyleczto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map