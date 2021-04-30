class Vehicle {
  protected honk(): void {
    console.log('Beep!');
  }

  public drive(): void {
    console.log('Vroom, Vrooom!');
  }
}

const vehicle = new Vehicle();
vehicle.drive();

class Auto extends Vehicle {
  protected honk(): void {
    console.log('Auto - Beep!');
  }

  public callProtectedMethod() {
    this.honk()
  }

}

const auto = new Auto();
auto.callProtectedMethod()
