const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Ordering part is very critical for Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
pepsi[1] = false; // ok
// pepsi[1] = 'error';

// Type alias
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 70];
