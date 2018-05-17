// tslint:disable:interface-name
export namespace Example34 {
  interface User {
    name: string;
  }

  // merges with any interfaces in the same module/namespace
  interface User {
    age: number;
  }

  // subsequent property declarations must have the same type
  // interface User {
  //   age: string;
  // }

  // class also merges with interface
  class User {
    public constructor(public password: string) {}
  }

  const john = new User("qwerty");

  console.log({
    john,
    // TS knows we have these but doesn't know that they're uninitialized
    name: john.name,
    age: john.age
    // xxx: john.xxx // does not exist
  });

  // https://www.typescriptlang.org/docs/handbook/declaration-merging.html
}
