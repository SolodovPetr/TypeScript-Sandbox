const apples: number = 5;

const speed: string = 'fast';

const hasName: boolean = true;

const nothing: null = null;

const notSetYet: undefined = undefined;

// built in objects
const now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];

const numbers: number[] = [1, 2, 7];

const booleans: boolean[] = [true, false, true];

// Classes
class Car {

}
const car: Car = new Car();

// Object literal
let point: { x: number; y: string } = {
    x: 10,
    y: '20'
}

// Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
