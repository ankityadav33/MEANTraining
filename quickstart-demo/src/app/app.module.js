"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var user_component_1 = require("./user.component");
var doubleme_pipe_1 = require("./doubleme.pipe");
var user_service_1 = require("./user.service");
var http_1 = require("@angular/http");
var about_component_1 = require("./about.component");
var product_component_1 = require("./product.component");
var router_1 = require("@angular/router");
var app_route_1 = require("./app.route");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(app_route_1.APP_ROUTES)],
        declarations: [app_component_1.AppComponent, user_component_1.UserComponent, doubleme_pipe_1.DoubleMePipe, product_component_1.ProductComponent, about_component_1.AboutComponent],
        providers: [user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map