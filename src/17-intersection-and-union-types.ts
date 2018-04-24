type Email = string;
type Password = string;
type Age = number;

interface IUserAccount {
  email: Email;
  password: Password;
  age: Age;
}

interface IHasName {
  name: string;
}

interface ICanWalk {
  walk(): void;
}

interface ICanSwim {
  swim(): void;
}

// intersection (not union!) type
type IFerret = IHasName & ICanWalk & ICanSwim;

class SableFerret implements IFerret {
  public constructor(public name: string) {}

  public walk() {
    console.log(`sable ferret "${this.name} is walking"`);
  }

  public swim() {
    console.log(`sable ferret "${this.name} is swimming"`);
  }
}

const spark = new SableFerret("Spark");

spark.walk();
spark.swim();

function takeForAWalk(animal: ICanWalk) {
  animal.walk();
}

takeForAWalk(spark);

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

// another union example
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(name: NameOrResolver): Name {
  if (typeof name === "string") {
    return name;
  } else {
    return name();
  }
}

console.log("name1", getName("test 1"));
console.log("name2", getName(() => "test 2"));
