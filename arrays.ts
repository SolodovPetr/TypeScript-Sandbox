const carMakers: string[] = ['volvo', 'toyota', 'mazda'];
const carMakers2: (string | boolean)[] = ['volvo', 'toyota', 'mazda', false];
const dates: Date[] = [new Date(), new Date()];

const carsByModels: string[][] = [['fiesta'], ['corolla'], ['323', '626']];

// TS helps with inference when extracting values
const volvo = carMakers[0]; // volvo is volvo: string
const mazda = carMakers.pop(); // mazda: string

// TS prevent incompatible values
// carMakers.push(21); // fail

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const someDates: (string | Date)[] = [new Date(), 'holiday']
someDates.push('today');