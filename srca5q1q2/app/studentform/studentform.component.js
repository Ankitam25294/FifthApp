"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var StudentformComponent = /** @class */ (function () {
    function StudentformComponent() {
        this.name = "ankita";
        this.address = "sdfd";
        this.phoneno = "57575";
        this.gender = "f";
        this.collegename = "mit";
        this.batchname = "sdf";
        this.emailid = "sdfds";
    }
    StudentformComponent.prototype.ngOnInit = function () {
    };
    StudentformComponent.prototype.displayData = function () {
        console.log("Name:" + this.name + "Gender:" + this.gender + "Address:" + this.address + "Phone No:" + this.phoneno + "EmailID:" + this.emailid + "College Name:" + this.collegename + "BatchName:" + this.batchname);
    };
    StudentformComponent = __decorate([
        core_1.Component({
            selector: 'app-studentform',
            templateUrl: './studentform.component.html',
            styleUrls: ['./studentform.component.css']
        })
    ], StudentformComponent);
    return StudentformComponent;
}());
exports.StudentformComponent = StudentformComponent;
