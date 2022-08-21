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
greetOptional({ person: "betty", age: 23 });
function welcomePeople(peeps) {
    if (Array.isArray(peeps)) {
        console.log("Hello, " + peeps.join(", "));
    }
    else {
        console.log("Welcome one traveler, " + peeps);
    }
}
welcomePeople(["john", "harry", "bob"]);
welcomePeople("Ryan");
function printID(id) {
    if (typeof id === "string") {
        console.log("id is " + id.toUpperCase());
    }
    else {
        console.log("id is " + id);
    }
}
printID("twenty");
printID(20);
var greeting = "hello";
console.log(greeting);
//literal types - must be one of the strings listed or of Options type (object with greeting property)
function printGreeting(greet) {
    console.log(typeof greet === "object" ? greet.greeting : greet);
}
printGreeting("hi");
//printGreeting("yo");
printGreeting({ greeting: 20 });
function dosomething(x) {
    return x === null ? 0 : x;
}
dosomething(null);
//using ! allows us to tell typescript that this variable will NOT be null for sure
// using ? means its an optional var
function dosomething2(x) {
    return x.toFixed();
}
console.log(dosomething2(3));
//null is of type "object" , so TS will check to ensure we narrow down with null
//perform truthiness check on strs to ensure it is not null  "strs && etc."
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s); //could be null!!  will not compile !
        }
    }
    else if (strs && typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log("strs is null");
    }
}
printAll(null);
function multiplyVal(container, factor) {
    //Remove both null and undefined types
    if (container.value != null) {
        //now we can safely multiply the value
        container.value *= factor;
        console.log(container.value);
    }
}
multiplyVal({ value: 10 }, 5);
