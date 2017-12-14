interface IPet {
  name: string;
}

interface IParrot extends IPet {
  wingCount: number;
}

interface IHamster extends IPet {
  legCount: number;
}

class Dog implements IPet {
  constructor(public name: string) {}

  public talk(): string {
    return "woof woof";
  }
}

// user defined type guard
function isHamster(pet: IPet): pet is IHamster {
  return (pet as IHamster).legCount !== undefined;
}

function logPetInfo(pet: IPet) {
  if (isHamster(pet)) {
    // if (pet instanceof IHamster) {
    console.log(`hamster "${pet.name}" has ${pet.legCount} legs`);
  } else if (pet instanceof Dog) {
    console.log(`dog "${pet.name}" says: ${pet.talk()}`);
  } else {
    console.log(`unknown pet called "${pet.name}"`);
  }
}

const parrotJill: IParrot = {
  name: "Jill",
  wingCount: 2
};
const hamsterJack: IHamster = {
  name: "Jack",
  legCount: 4
};
const dogMax = new Dog("Max");

logPetInfo(parrotJill);
logPetInfo(hamsterJack);
logPetInfo(dogMax);
