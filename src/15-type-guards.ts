interface IPet {
  name: string;
  talk(): string;
}

interface IParrot extends IPet {
  wingCount: number;
}

interface IHamster extends IPet {
  legCount: number;
}

class Dog implements IPet {
  public constructor(public name: string) {}

  // tslint:disable-next-line:prefer-function-over-method
  public talk(): string {
    return "woof woof";
  }
}

// user defined type guard
// tslint:disable-next-line:no-any
function isHamster(pet: any): pet is IHamster {
  return pet.legCount !== undefined;
}

function logPetInfo(pet: IPet) {
  if (isHamster(pet)) {
    // if (pet instanceof IHamster) {
    console.log(
      `hamster "${pet.name}" has ${pet.legCount} legs and says: ${pet.talk()}`
    );
  } else if (pet instanceof Dog) {
    console.log(`dog "${pet.name}" says: ${pet.talk()}`);
  } else {
    console.log(`unknown pet called "${pet.name}" says: ${pet.talk()}`);
  }
}

const parrotJill: IParrot = {
  name: "Jill",
  wingCount: 2,
  talk() {
    return `I'm ${this.name}, the parrot`;
  }
};
const hamsterJack: IHamster = {
  legCount: 4,
  name: "Jack",
  talk: () => "I'm a cool hamster"
  // talk: () => `I'm a cool hamster with ${this.legCount} legs`
};
const dogMax = new Dog("Max");

logPetInfo(parrotJill);
logPetInfo(hamsterJack);
logPetInfo(dogMax);

function getLegCount(animal: IParrot | IHamster) {
  if ("legCount" in animal) {
    // animal got narrowed to IHamster (TS 2.7+)
    return animal.legCount;
  }

  return 0;
}
