"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.sayHi = function () {
        return "Hi " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
