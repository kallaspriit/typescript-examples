interface IKeyValuePair<T> {
  key: string;
  value: T;
}

interface IKeyValueDatabase<T> {
  items: Array<IKeyValuePair<T>>;
}

const numberDatabase: IKeyValueDatabase<number> = {
  items: [
    {
      key: "age",
      value: 15
    },
    {
      key: "length",
      value: 198
    }
    // {
    //   key: "name",
    //   value: "jack"
    // }
  ]
};

interface IHasLength {
  length: number;
}

function getLength<T extends IHasLength>(a: T): number {
  return a.length;
}

class Building {
  public constructor(public name: string, public length: number) {}
}

const burjKhalifa = new Building("Burj Khalifa", 828);

console.log("length of string", getLength("hello"));
console.log("length of array", getLength([1, 2, 3]));
console.log("length of building", getLength(burjKhalifa));

class Store<T> {
  // private items: T[];
  private readonly items: T[] = [];

  public addItem(item: T) {
    this.items.push(item);
  }

  public getItems() {
    return this.items;
  }
}

const stringStore = new Store<string>();

stringStore.addItem("foo");
stringStore.addItem("bar");
// stringStore.addItem(55);

console.log(`string store items: ${stringStore.getItems().join(", ")}`);