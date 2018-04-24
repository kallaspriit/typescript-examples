// tslint:disable-next-line:no-any
function lazyLibrary(a: any, b: any): any {
  // tslint:disable-next-line:restrict-plus-operands
  return a + b;
}

function sum(a: number, b: number): number {
  return a + b;
}

const result1 = lazyLibrary(2, 3);

const result2 = sum(result1 as number, 4);
