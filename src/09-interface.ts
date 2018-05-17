namespace Example09 {
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

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  interface IShape {
    area: number;
    getName(): string;
    // [x: string]: any;
  }

  export interface ISquare extends IShape {
    width: number;
    height: number;
  }

  function reportShapeArea(shape: IShape) {
    console.log(
      `shape called "${shape.getName()}" has an area of ${shape.area}`
    );

    // 'ISquare' only refers to a type, but is being used as a value here.
    // if (shape instanceof ISquare) {

    // }
  }

  const shape1: IShape = {
    area: 10,
    getName() {
      return "First shape";
    }
  };

  reportShapeArea(shape1);

  reportShapeArea({
    area: 20,
    getName: () => "Second shape"
    // width: 10 // Object literal may only specify known properties, and 'width' does not exist in type 'IShape'
  });
}
