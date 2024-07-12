"use strict";
var anchor = document.querySelector('a');
if (anchor) {
    console.log(anchor.href);
}
console.log(anchor.href);
console.log(anchor.protocol);
console.log(anchor.hostname);
console.log(anchor.port);
//const form = document.querySelector('form')!;
/**The as keyword in TypeScript is used for type assertion,
 explicitly telling the compiler to treat a value as a specific type. */
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
