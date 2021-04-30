const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: false,
  summary() {
    return this.name;
  },
  report() {
    return `Name: ${this.name}, year: ${this.year}`;
  },
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

// improve code above with interface Vehicle
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // method that must returns string
}

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

printVehicle2(oldCivic);

// Reportable
interface Reportable {
  report(): string;
}

const printReport = (item: Reportable) => {
    console.log(item.report())
}

printReport(oldCivic);