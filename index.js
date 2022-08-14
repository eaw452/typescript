"use strict";
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function check(valid) {
    console.log(valid.name);
}
var j = { x: 5, y: 9, name: "me" };
check(j);
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Barry", new Date());
function greetOptional(obj) {
    console.log("Hello " + obj.person + ", youre age is " + (obj.age !== undefined ? obj.age : 0));
}
greetOptional({ person: "betty" });
