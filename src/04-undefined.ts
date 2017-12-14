function greet(name: string | undefined) {
  if (name) {
    console.log(`hey ${name}!`);
  } else {
    console.log(`hey stranger!`);
  }
}

function greet2(name?: string) {
  if (name) {
    console.log(`hey ${name}!`);
  } else {
    console.log(`hey stranger!`);
  }
}

function getGreeting(name?: string): string | undefined {
  if (name) {
    return `hey ${name}!`;
  }

  // return;
  return undefined;
}
