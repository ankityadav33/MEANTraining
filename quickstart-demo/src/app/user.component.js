"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var mock_1 = require("./mock");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService) {
        var _this = this;
        this.userService = userService;
        console.log('constructor called!!!');
        //this.users=this.userService.getUserData();
        this.userService.getUserData().subscribe(function (users) { return _this.users = users; });
    }
    UserComponent.prototype.moreInfo = function (user) {
        alert(user.firstname + " is working with " + user.company + "!!!");
    };
    UserComponent.prototype.ngOnChanges = function () { console.log("ngOnChanges"); };
    UserComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.users = mock_1.USER_DATA;
    };
    UserComponent.prototype.ngDoCheck = function () { console.log("ngDoCheck"); };
    UserComponent.prototype.ngAfterContentInit = function () { console.log("ngAfterContentInit"); };
    UserComponent.prototype.ngAfterContentChecked = function () { console.log("ngAfterContentChecked"); };
    UserComponent.prototype.ngAfterViewInit = function () { console.log("ngAfterViewInit"); };
    UserComponent.prototype.ngAfterViewChecked = function () { console.log("ngAfterViewChecked"); };
    UserComponent.prototype.ngOnDestroy = function () { console.log("ngOnDestroy"); };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        templateUrl: "./view/user.component.html",
        styleUrls: ["./styles/user.component.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map