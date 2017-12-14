enum Gender {
  MALE,
  FEMALE,
  APACHE_HELICOPTER
}

interface IPerson {
  firstName: string;
  lastName: string;
  gender: Gender;
  age?: number;
}

function greetPerson(person: IPerson) {
  console.log(`hello ${person.firstName} ${person.lastName}!`);
}

const person1: IPerson = {
  firstName: "Priit",
  lastName: "Kallas",
  age: 29,
  gender: Gender.MALE
};

const person2 = {
  profession: "distiller",
  firstName: "Jack",
  lastName: "Daniels",
  age: 171,
  gender: Gender.MALE,
  nationality: "American"
};

greetPerson(person1);
greetPerson(person2);

interface IShape {
  getArea: () => number;
}

interface ISquare extends IShape {
  width: number;
  height: number;
}

interface ICircle extends IShape {
  radius: number;
}

function reportShapeArea(shape: IShape) {
  console.log(`shape has an area of ${shape.getArea()}`);

  // if (shape instanceof ISquare) {
  // ...
  // }
}

reportShapeArea({
  getArea: () => 10
});
