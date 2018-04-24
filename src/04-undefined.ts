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
  if (typeof name === "string") {
    return `hey ${name}!`;
  }

  // return;
  return undefined;
}
