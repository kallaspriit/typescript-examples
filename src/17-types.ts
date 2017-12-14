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
  walk: () => void;
}

interface ICanSwim {
  swim: () => void;
}

type IFerret = IHasName & ICanWalk & ICanSwim;

class SableFerret implements IFerret {
  constructor(public name: string) {}

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

type Maybe<T> = undefined | T;

function getUserById(id: number): Maybe<IUserAccount> {
  if (id === 1) {
    return {
      email: "foo@bar.com",
      password: "xxx",
      age: 22
    };
  }

  return undefined;
}

const user1 = getUserById(1);

if (user1) {
  console.log(`got user ${user1.email}`);
} else {
  console.log("user not found");
}

type MouseEventType = "mouse-down" | "mouse-up";

interface IMouseEvent {
  type: MouseEventType;
  x: number;
  y: number;
}

function handleMouseEvent(event: IMouseEvent) {
  console.log(`got mouse event "${event.type}" at ${event.x}x${event.y}`);
}

handleMouseEvent({
  type: "mouse-down",
  // type: "xxx",
  x: 100,
  y: 200
});
