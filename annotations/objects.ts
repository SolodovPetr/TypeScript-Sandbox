const profile = {
  name: 'Tom',
  age: 30,
  coordinates: {
    latitude: 100,
    longitude: 200,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructuring with annotation
const { age }: { age: number } = profile;
const {
  coordinates: { latitude, longitude }, // destructuring 
}: { coordinates: { latitude: number; longitude: number } } = profile; // annotation
console.log(age, latitude, longitude);
