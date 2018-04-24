// const age: number = 30;
const age = 30;

const isActive = true;

const role = "admin";

const primes: number[] = [2, 3, 5, 7, 11];

enum Suite {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
const card: [number, Suite] = [5, Suite.Clubs]; // tuple

// tslint:disable-next-line:no-any
let something: any;
something = 5;
something = "test";

function t(): void {
  // return true;
}
