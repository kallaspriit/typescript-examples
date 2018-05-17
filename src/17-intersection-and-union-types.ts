namespace Example17 {
  // you can alias built-in types
  type Name = string;

  interface IHasName {
    name: Name;
  }

  interface ICanWalk {
    speed: number;
    walk(): void;
  }

  interface ICanSwim {
    speed: number;
    // speed: string; // declaration merging - speed: string & number
    swim(): void;
  }

  // intersection (not union!) type ()
  type IFerret = IHasName & ICanWalk & ICanSwim;

  class Ferret implements IFerret {
    public constructor(public name: string, public speed: number) {}

    public walk() {
      console.log(`sable ferret "${this.name} is walking"`);
    }

    public swim() {
      console.log(`sable ferret "${this.name} is swimming"`);
    }
  }

  const spark = new Ferret("Spark", 10);

  spark.walk();
  spark.swim();

  function takeForAWalk(animal: ICanWalk) {
    animal.walk();
  }

  takeForAWalk(spark);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // union type (either a Date OR a number)
  function getSecondsSince(time: Date | number) {
    if (time instanceof Date) {
      // instanceof type guard makes sure that TypeScript knows that time is now a Date
      return Date.now() - time.getTime();
    }

    return Date.now() - time;
  }

  // these give the same result
  console.log(
    "getSecondsSince(new Date(Date.now() - 10))",
    getSecondsSince(new Date(Date.now() - 10))
  );
  console.log(
    "getSecondsSince(Date.now() - 10))",
    getSecondsSince(Date.now() - 10)
  );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // another union example using generics
  type ValueResolver<T> = T | (() => T) | (() => Promise<T>);

  interface IConfig {
    port: ValueResolver<number>;
  }

  const config1: IConfig = {
    port: 8000
  };

  const config2: IConfig = {
    port: () => 8001
  };

  const config3: IConfig = {
    port: async () =>
      new Promise<number>(resolve => setTimeout(() => resolve(8002), 1000))
  };

  async function resolveValue<T>(value: ValueResolver<T>): Promise<T> {
    if (value instanceof Promise) {
      return value;
    } else if (typeof value === "function") {
      return value();
    }

    return value;
  }

  async function setup(config: IConfig) {
    const port = await resolveValue(config.port);

    console.log(`setup on port ${port}`);
  }

  (async () => {
    console.log({
      config1,
      config2,
      config3
    });

    await setup(config1);
    await setup(config2);
    await setup(config3);
  })().catch(console.error);
}
