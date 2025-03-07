function printCoord(pt : { x : number, y : number }) {
    console.log("The coordinate's X value is " + pt.x);
    console.log("The coordinate's Y value is " + pt.y);
}

printCoord({ x : 3, y : 8});

/*************************************************** */

interface IPerson { 
    name : string;
    age : number;
};

const person : IPerson = {
    name : "gawnm",
    age : 26
};

const key = "name";

console.log(person.age);
console.log(person.name);