// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc1: (a: number, b: number, c: string) => number;

calc1 = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

// example 4
type Calculation = (a: number, b: number) => number;

const operations: { [key: string]: Calculation } = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error('Division by zero is not allowed');
    }
  },
};

let calc2: (a: number, b: number, c: string) => number;

calc2 = (numOne, numTwo, action) => {
  const operation = operations[action];
  console.log(operation);
  if (operation) {
    return operation(numOne, numTwo);
  } else {
    throw new Error('Unsupported action');
  }
};

console.log(calc2(10, 5, 'ad'));
