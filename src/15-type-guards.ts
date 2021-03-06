namespace Example15 {
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
    public constructor(public name: string, public pawCount = 4) {}

    // tslint:disable-next-line:prefer-function-over-method
    public talk(): string {
      return "woof woof";
    }

    public getPawCount() {
      return this.pawCount;
    }
  }

  // user defined type guard
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
  const dogMax = new Dog("Max", 3);

  logPetInfo(parrotJill);
  logPetInfo(hamsterJack);
  logPetInfo(dogMax);

  // type narrowing
  function getLegCount(animal: IParrot | IHamster | Dog) {
    if ("legCount" in animal) {
      // animal got narrowed to IHamster (TS 2.7+)
      return animal.legCount;
    } else if ("getPawCount" in animal) {
      // must be a dog
      return animal.getPawCount();
    }

    return 0;
  }

  console.log("parrot leg count", getLegCount(parrotJill));
  console.log("hamster leg count", getLegCount(hamsterJack));
  console.log("dog leg count", getLegCount(dogMax));
}
