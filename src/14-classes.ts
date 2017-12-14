interface IVehicle {
  name: string;
  getSpeed: () => number;
}

class Wheel {
  private speed: number;

  constructor(public radius: number, initialSpeed = 0) {
    this.setSpeed(initialSpeed);
  }

  public getSpeed() {
    return this.speed;
  }

  public setSpeed(speed: number) {
    this.speed = speed;
  }
}

// tslint:disable-next-line:max-classes-per-file
class Car implements IVehicle {
  private wheels: Wheel[];

  constructor(public name: string, private wheelRadius: number = 100) {
    this.wheels = [
      new Wheel(this.wheelRadius),
      new Wheel(this.wheelRadius),
      new Wheel(this.wheelRadius),
      new Wheel(this.wheelRadius)
    ];
  }

  public getSpeed() {
    return (
      this.wheels.reduce((speedSum, wheel) => {
        return speedSum + wheel.getSpeed();
      }, 0) / this.wheels.length
    );
  }

  public getWheels() {
    return this.wheels;
  }

  public accelerate() {
    this.wheels.forEach(wheel => {
      wheel.setSpeed(wheel.getSpeed() + 1);
    });
  }
}

function logVehicleInfo(vehicle: IVehicle) {
  if (vehicle instanceof Car) {
    console.log(
      `car ${vehicle.name} has ${
        vehicle.getWheels().length
      } wheels and speed of ${vehicle.getSpeed()}`
    );
  } else {
    console.log(`vehicle ${vehicle.name} has speed of ${vehicle.getSpeed()}`);
  }
}

const bmw = new Car("BMW 323");
bmw.accelerate();

logVehicleInfo(bmw);
