
const a: number = 5.321;


interface myObj {
    x: number;
    y: number;
    z?: number;
}



const obj: myObj = {
    x: 5.34,
    y: 7
}


const obj2: myObj = {
    x: 123,
    y: 213
}

let isDog = true;

console.log(obj2.z + 5)

obj.z=12

// functions 
type AddFunc = (x: number, y: number) => number;

const add: AddFunc = (x, y) => x + y; 

const add2 = ({x, y}: {x: number, y: number}) => x + y;

// add2(obj)

// Unions

let maybeNum: number | string = 5; 
maybeNum = "hello!";
maybeNum = 12

interface Dog {
    bark: string
}

interface Cat {
    purr: string
}

type DogCat = Dog & Cat;

const dogCat: DogCat = {
    bark: "bark!",
    purr: "purr!"
}



