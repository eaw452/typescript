class Empty { }

interface Pointlike {
    x: number;
    y: number;
    name: string;
}

interface Named {
    name: string;
}

function check(valid: Pointlike | Named): void {
    console.log(valid.name);
}

const j = { x: 5, y: 9, name: "me" }
check(j);

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Barry", new Date());


function greetOptional(obj: { person: string, age?: number }) {
    console.log("Hello " + obj.person + ", youre age is " + (obj.age !== undefined ? obj.age : 0));
}

greetOptional({ person: "betty", age: 23 });

function welcomePeople(peeps: string[] | string) {
    if (Array.isArray(peeps)) {
        console.log("Hello, " + peeps.join(", "));
    } else {
        console.log("Welcome one traveler, " + peeps);
    }
}

welcomePeople(["john", "harry", "bob"]);
welcomePeople("Ryan");


type ID = string | number;
function printID(id: ID) {
    if (typeof id === "string") {
        console.log("id is " + id.toUpperCase());
    } else {
        console.log("id is " + id);
    }
}
printID("twenty");
printID(20);

let greeting: "hello" | "hi" = "hello";
console.log(greeting);

interface Options {
    greeting: number;
}

//literal types - must be one of the strings listed or of Options type (object with greeting property)
function printGreeting(greet: "hello" | "hi" | "howdy" | Options) {
    console.log(typeof greet === "object" ? greet.greeting : greet);
}

printGreeting("hi");
//printGreeting("yo");
printGreeting({ greeting: 20 });


function dosomething(x: number | null): number {
    return x === null ? 0 : x;
}

dosomething(null);
//using ! allows us to tell typescript that this variable will NOT be null for sure
// using ? means its an optional var
function dosomething2(x?: number | null): number | string {
    return x!.toFixed();
}

console.log(dosomething2(3));


//null is of type "object" , so TS will check to ensure we narrow down with null
//perform truthiness check on strs to ensure it is not null  "strs && etc."
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);  //could be null!!  will not compile !
        }
    } else if (strs && typeof strs === "string") {
        console.log(strs);
    } else {
        console.log("strs is null");
    }
}

printAll(null);

interface Container {
    value: number | null | undefined;
}

function multiplyVal(container: Container, factor: number) {
    //Remove both null and undefined types
    if (container.value != null) {
        //now we can safely multiply the value
        container.value *= factor;
        console.log(container.value);
    }
}

multiplyVal({ value: 10 }, 5);


//use of the "in" operator for narrowing.
//checks whether an object has a property with the specified name
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}
function move(animal: Bird | Fish) {
    if ("swim" in animal) {
        animal.swim();
    } else {
        animal.fly();
    }
}
function example() {
    console.log("fly example!");
}
var bird1: Bird = { fly: () => { console.log("fly!"); } };  //use of anonymous func
var bird2: Bird = { fly: example };
move(bird1);
move(bird2);

//use of instanceof  - checks whether obj's prototype chain contains Date
function isDate(obj: Date | string) {
    if (obj instanceof Date) {
        console.log(obj.toDateString());
    } else {
        console.log(obj);
    }
}
isDate(new Date());
isDate("the date");

//asignments  - TypeScript will evaluate right side of '=' sign, and narrow down the variable type
let a = 5 ? "good" : 5;  //a is given type number | string by TS
a = 10;  //a can be assigned a number OR a string
a = "good";  //a can be assigned a number OR a string


let b = "good";  //b is given type string by TS
//b = 10;  //cannot assign a number to b, as b is type string
b = "bye";


//Control flow analysis of TS
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    //return "".repeat(padding) + input;  //will not compile becuase TS knows this must be a string
    return padding + input;
}
console.log(padLeft(10, "hello padded on left"));

//although x is declared with union type string|number|boolean , the function
//can only return x as a string or number due to flow of execution 
function xTypes(): string | number {
    let x: string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x);  //x is a boolean here

    if (Math.random() < 0.5) {
        x = 100;
    } else {
        x = "string type";
    }

    return x;
}
console.log(xTypes());


//Using Type Predicates
function getSmallPet(): Fish | Bird {
    const x = Math.random();
    if (x < 0.5) {
        return { swim: () => { console.log("swimming"); } };
    }
    return { fly: () => { console.log("flying"); } };
}
//Type predicate is used as a return type for this function  'paramName is type'
function isFish(pet: Bird | Fish): pet is Fish {
    //return (pet as Fish).swim !== null; //results in true regardless - maybe with target es2015
    return Boolean((pet as Fish).swim);
}

let pet: Fish | Bird = getSmallPet();
//Type predicates allows us to instead of using the below type assertions 'varName as type'
if ((pet as Fish).swim) {
    (pet as Fish).swim();  //this is messy
} else {
    (pet as Bird).fly();  //this is messy
}
//You can use the function with the predicate for custom type checking
if (isFish(pet)) {
    pet.swim();  //TS knows that pet is a Fish here
} else {
    pet.fly();  //TS knows that pet must NOT be a Fish here, so it is therefore a Bird
}

//Discriminated Unions
//Sometimes we need to have a common property among different custom types, 
//which can be used to discern between the types. This can be helpful when a function 
//takes a parameter of a union type, such as (Circle | Square) or (ClientMessage | ServerMessage).
//This common property allows TS to narrow down the potential types that a variable may be.
interface Circle {
    kind: "circle";
    radius: number;
}
interface Square {
    kind: "square";
    sideLength: number;
}
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;  //now TS knows shape is Circle
    }
    return shape.sideLength ** 2;  //here, shape must be a Square because shape.kind !== "circle"
}

console.log(getArea({ kind: "circle", radius: 5 }));





