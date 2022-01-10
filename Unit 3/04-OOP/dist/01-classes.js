"use strict";
// class Department {
//   static paycheck = 1000000
//   static updatePay = (newNum: number) => {
//     this.paycheck = newNum
//     return this.paycheck
//   }
// }
// const IT = new Department()
// // console.log(IT.updatePay(20));
// class ProjectMath {
//   static gravity = 9.8
//   static speed(time: number) {
//     return time ** 2 * ProjectMath.gravity;
//   }
// }
//gradebook
var Gradebook = /** @class */ (function () {
    function Gradebook() {
    }
    Gradebook.findAvg = function () {
        var sum = this.grades.reduce(function (curr, next) {
            return curr + next;
        }, 0);
        return sum / this.grades.length;
    };
    Gradebook.grades = [90.4, 65.3, 94, 87.8, 53.9];
    return Gradebook;
}());
console.log(Gradebook.findAvg());
//static array with current grades
// find the passing grade = 65
// put in an array and find the average
// remove the lowest grade from an array
// print out all the items in an array (...) spread operator
