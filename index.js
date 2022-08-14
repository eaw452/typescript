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
function printGreeting(greet) {
    console.log(greet);
}
printGreeting("hi");
