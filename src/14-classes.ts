namespace Example14 {
  interface IVehicle {
    name: string;
    getSpeed(): number;
  }

  class Wheel {
    private speed: number;
    // public radius: number; // created by the constructor

    public constructor(public radius: number, initialSpeed = 0) {
      this.speed = initialSpeed;
    }

    public getSpeed() {
      return this.speed;
    }

    public setSpeed(speed: number) {
      this.speed = speed;
    }
  }

  class Car implements IVehicle {
    private readonly wheels: Wheel[];

    public constructor(public name: string, wheelRadius: number = 100) {
      this.wheels = [
        new Wheel(wheelRadius),
        new Wheel(wheelRadius),
        new Wheel(wheelRadius),
        new Wheel(wheelRadius)
      ];
    }

    public getSpeed() {
      return (
        this.wheels.reduce(
          (speedSum, wheel) => speedSum + wheel.getSpeed(),
          0
        ) / this.wheels.length
      );
    }

    public getWheels() {
      return this.wheels;
    }

    public accelerate() {
      this.wheels.forEach(wheel => {
        wheel.setSpeed(wheel.getSpeed() + 10);
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

    console.log(vehicle);
  }

  const bmw = new Car("BMW 323");
  bmw.accelerate();

  logVehicleInfo(bmw);
}
