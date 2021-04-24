

type Style = "bold" | "italic" | 23;

let font: Style = "bold";

// [key: string]: any | to make it less restrictive and lets you add more properties. 
// In this case first and last required and you can add anything else
interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2: Person = {
    first: 'Jeff',
    last: 'Delaney',
    fast: true
}


function pow(x: number, y: number): void {
    let font = "italic"
    console.log(font)
    Math.pow(x,y).toString()
}

pow(5,10)

type MyList = [number, string, boolean?]

const arr: number[] = []

const arr2: MyList = [12, "test"]

arr.push(12)
// arr.push("23")
// arr.push(true)