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
class Car {}
const car: Car = new Car();

// Object literal
let point: { x: number; y: string } = {
  x: 10,
  y: '20',
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function tht returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When declare variable on one line and initialize it later
const words = ['one', 'green', 'two'];
let foundWord: boolean; // should have annotation

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type can not be inferred correctly
const mixedNumbers = [-3, 5, -10, 17];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] > 0) {
        numberAboveZero = mixedNumbers[i];
    }
}


