enum Suite {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
const card: [number, Suite] = [5, Suite.Clubs]; // tuple

function getSuiteByName(name: string): Suite | null {
  switch (name) {
    case "clubs":
      return Suite.Clubs;

    case "diamonds":
      return Suite.Diamonds;

    case "hearts":
      return Suite.Hearts;

    case "spades":
      return Suite.Spades;
  }

  return null;
}

const suite = getSuiteByName("clubs");

if (suite !== null) {
  // if (suite) {
  console.log("got suite", suite, suite === Suite.Clubs);
} else {
  console.log("invalid suite");
}
