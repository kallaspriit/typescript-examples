namespace Example04 {
  function greet(name: string | undefined) {
    if (typeof name === "string") {
      console.log(`hey ${name}!`);
    } else {
      console.log(`hey stranger!`);
    }
  }

  function greet2(name?: string) {
    if (typeof name === "string") {
      console.log(`hey ${name}!`);
    } else {
      console.log(`hey stranger!`);
    }
  }

  function getGreeting(name?: string): string | undefined {
    // function getGreeting(name?: string): string? { // syntax error
    if (typeof name === "string") {
      return `hey ${name}!`;
    }

    // they're the same, omit undefined
    // return undefined;
    return;
  }

  greet("test");
  greet(undefined);

  greet2("test");
  greet2(undefined);

  // greet(); // expected 1 arguments but got zero
  greet2(); // but this works

  console.log('getGreeting("test")', getGreeting("test"));
  console.log("getGreeting()", getGreeting());
}
