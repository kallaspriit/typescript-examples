// tslint:disable:max-classes-per-file

class BeeKeeper {
  constructor(public hasMask: boolean) {}
}

class ZooKeeper {
  constructor(public nameTag: string) {}
}

class Animal {
  constructor(public numLegs: number) {}
}

class Bee extends Animal {
  public keeper = new BeeKeeper(true);

  constructor() {
    super(6);
  }
}

class Lion extends Animal {
  public keeper: ZooKeeper;

  constructor() {
    super(4);

    this.keeper = new ZooKeeper("Jack");
  }
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

const lion = createInstance(Lion);
const bee = createInstance(Bee);

console.log(
  `Lion with ${lion.numLegs} legs has a keeper with name tag: ${
    lion.keeper.nameTag
  }`
);
console.log(
  `Bee with ${bee.numLegs} legs has a keeper that has mask: ${
    bee.keeper.hasMask ? "yes" : "no"
  }`
);
