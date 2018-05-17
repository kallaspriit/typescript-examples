namespace Example11 {
  const user = {
    age: 29,
    firstName: "Priit",
    lastName: "Kallas"
  };

  const { lastName, firstName, ...otherInfo } = user;

  console.log(`hey ${firstName} ${lastName}`, otherInfo);
  // console.log(otherInfo.age, otherInfo.profession);

  // rename destructured property
  const { firstName: givenName } = user;

  console.log(`hey ${givenName}!`);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  interface IUser {
    firstName: string;
    lastName: string;
    age?: number;
  }

  function greetUser({
    firstName: forename,
    lastName: surname,
    age = -1
  }: IUser) {
    console.log(`${forename} ${surname} is ${age} years old`);
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
}
