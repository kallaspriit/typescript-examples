(() => {
  // IIFE - immediately-invoked function expression
  const user = {
    age: 29,
    firstName: "Priit",
    lastName: "Kallas"
  };

  const { lastName, firstName, ...otherInfo } = user;

  console.log(`hey ${firstName} ${lastName}`, otherInfo);
  // console.log(otherInfo.age, otherInfo.profession);

  const { firstName: forename } = user;

  console.log(`hey ${forename}!`);
})();

interface IUser {
  firstName: string;
  lastName: string;
  age?: number;
}

function greetUser({ firstName, lastName, age = -1 }: IUser) {
  console.log(`${firstName} ${lastName} is ${age} years old`);
}

greetUser({
  firstName: "Priit",
  lastName: "Kallas",
  age: 29
});

greetUser({
  firstName: "Jack",
  lastName: "Daniels"
});

function greetUser2(
  { firstName, lastName, age = -1 }: IUser = {
    firstName: "John",
    lastName: "Doe"
  }
) {
  console.log(`${firstName} ${lastName} is ${age} years old`);
}

greetUser2();
greetUser2({
  firstName: "Jack",
  lastName: "Daniels"
});
