// tslint:disable-next-line:no-any
function lazyLibrary(a: any, b: any): any {
  // tslint:disable-next-line:restrict-plus-operands
  return a + b;
}

function sum(a: number, b: number): number {
  return a + b;
}

const result1 = lazyLibrary(2, 3);
const result2 = sum(result1, 4);
const result3 = lazyLibrary("a", [2]);

console.log("result1", result1);
console.log("result2", result2);
console.log("result3", result3);
