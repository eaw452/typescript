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

function printGreeting(greet: "hello" | "hi" | "howdy") {
    console.log(greet);
}

printGreeting("hi");






