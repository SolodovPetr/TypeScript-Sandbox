class Vehicle {
  type: string = 'any';

  /*
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  */
  // shortcut for code above
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beep!');
  }

  public drive(): void {
    console.log('Vroom, Vrooom!');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

class Auto extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected honk(): void {
    console.log('Auto - Beep!');
  }

  public callProtectedMethod() {
    this.honk();
  }
}

const auto = new Auto(4, 'blue');
auto.callProtectedMethod();
