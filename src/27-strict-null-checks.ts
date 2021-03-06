namespace Example27 {
  class User {
    // ! means that TS should trust us that these get initialized
    public name!: string;
    public age!: number;

    public static create(info: Partial<User>): User {
      const user = new User();

      // best way to handle this?
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      (Object.keys(info) as Array<keyof User>).forEach(key => {
        const value = info[key];

        if (value !== undefined) {
          user[key] = value;
        }
      });

      return user;
    }
  }

  // initiate properly
  const user1 = User.create({
    name: "Jack Doe",
    age: 22
  });

  // this works
  console.log("user2", user1, user1.name, typeof user1.name);

  // but what if we don't really provide the name
  const user2 = User.create({ age: 32 });

  // we told TS to trust us that name is a string but it's not really..
  console.log("user1", user2, user2.name, typeof user2.name);
}
