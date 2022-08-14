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
    console.log("hello");
}

const j = { x: 5, y: 9, name: "me" }
check(j);