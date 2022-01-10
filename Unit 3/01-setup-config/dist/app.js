"use strict";
console.log('ping');

var testArray = [1, 2, 3, 4];

var addAll = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = numbers.reduce(function (curr, next) { return curr + next; }, 0);
    console.log(result);
};

addAll.apply(void 0, testArray);
/*as;dfasdf
asdfasdf*/