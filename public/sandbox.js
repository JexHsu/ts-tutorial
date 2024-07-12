"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc1;
calc1 = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
var operations = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) {
        if (b !== 0) {
            return a / b;
        }
        else {
            throw new Error('Division by zero is not allowed');
        }
    },
};
var calc2;
calc2 = function (numOne, numTwo, action) {
    var operation = operations[action];
    console.log(operation);
    if (operation) {
        return operation(numOne, numTwo);
    }
    else {
        throw new Error('Unsupported action');
    }
};
console.log(calc2(10, 5, 'ad'));
