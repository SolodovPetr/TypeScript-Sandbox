// Arrow functions
const add = (a: number, b: number): number => {
  return a + b;
};

// Function declaration
function subtract(a: number, b: number): number {
  return a - b;
}

// Anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void - return nothing
const logger = (message: string): void => {
  console.log(message);
  // Also can return null or undefined
};

// Never - exiting function earlier without return
const throwError = (message: string): never => {
  throw new Error(message);
};
// throw on condition with return
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
// throw on condition, NOT return
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// Destructuring with Annotations
const todayWeather = {
  today: new Date(),
  weather: 'sunny',
};

const logWeather = ({ today, weather }: { today: Date; weather: string }): void => {
  console.log(today);
  console.log(weather);
};
logWeather(todayWeather);
