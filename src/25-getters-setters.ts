namespace Example25 {
  class User {
    public constructor(public firstName: string, public lastName: string) {}

    public get name() {
      return `${this.firstName} ${this.lastName}`;
    }

    public set name(name) {
      const words = name.split(" ");

      if (words.length !== 2) {
        throw new Error(
          `Expected name to contain two words for first and last name but got ${
            words.length
          } words`
        );
      }

      this.firstName = words[0];
      this.lastName = words[1];
    }
  }

  const john = new User("John", "Rambo");
  const chuck = new User("Chuck", "Norris");

  chuck.name = "Carlos Norris";

  console.log({
    john,
    chuck,
    johnName: john.name,
    chuckName: chuck.name
  });

  chuck.name = "Carlos Ray Norris";
}
