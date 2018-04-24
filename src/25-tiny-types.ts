// https://janmolak.com/tiny-types-in-typescript-4680177f026e

import { TinyType, TinyTypeOf } from "tiny-types";

// hidden in some other file etc
class Author1 {
  public constructor(
    // what if we refactor the order of the names?
    public readonly lastName: string,
    public readonly firstName: string,
    public readonly dateOfBirthTimestamp: number
  ) {}
}

// constructor(string, string, number)
// which order of names?
// what is 32? looks like age but actually expects timestamp
const author1 = new Author1("Barnett", "Armstrong", 32);

console.log(author1);

//////////////////////////////////////////////////////

class FirstName extends TinyTypeOf<string>() {}
class LastName extends TinyTypeOf<string>() {}
class DateOfBirth extends TinyTypeOf<number>() {}

class Author2 extends TinyType {
  public constructor(
    public readonly lastName: LastName,
    public readonly firstName: FirstName,
    public readonly dateOfBirthTimestamp: DateOfBirth
  ) {
    super();
  }
}

// error: Argument of type '"Barnett"' is not assignable to parameter of type 'LastName'.
// const author2 = new Author2("Barnett", "Armstrong", 32);

const author2 = new Author2(
  new LastName("Armstrong"),
  new FirstName("Barnett"),
  new DateOfBirth(Date.now())
);

console.log(author2);
