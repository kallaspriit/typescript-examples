const c = 1;

function sum1(a: number, b: number): number {
  return a + b;
}

function sum2(a = 1, b = 1) {
  return a + b;
}

const a1 = sum1(2, 3);
const a2 = sum2(2, 3);

function concat(a: string, b: string) /*:string*/ {
  // try toggling return value
  return a + b;
  // return a > b;
}
