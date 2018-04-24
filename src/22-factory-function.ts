class Animal {
  public constructor(public name: string, public numLegs: number) {}
}

class Bee extends Animal {
  public constructor(name: string) {
    super(name, 6);
  }
}

class Lion extends Animal {
  public constructor(name: string) {
    super(name, 4);
  }
}

// factory function
function createAnimalInstance<A extends Animal>(
  c: new (name: string) => A,
  name: string
): A {
  return new c(name);
}

const lion = createAnimalInstance(Lion, "Leonidas");
const bee = createAnimalInstance(Bee, "bumblebee");

console.log(`Lion called ${lion.name} has ${lion.numLegs} legs`);
console.log(`Bee called ${bee.name} has ${bee.numLegs} legs`);
