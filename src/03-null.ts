namespace Example03 {
  // string enum
  enum Suite {
    CLUBS = "CLUBS",
    DIAMONDS = "DIAMONDS",
    HEARTS = "HEARTS",
    SPADES = "SPADES"
  }

  function getSuiteByName(name: string): Suite | null {
    switch (name) {
      case "clubs":
        return Suite.CLUBS;

      case "diamonds":
        return Suite.DIAMONDS;

      case "hearts":
        return Suite.HEARTS;

      case "spades":
        return Suite.SPADES;

      default:
        // tslint:disable-next-line:no-null-keyword
        return null;
    }
  }

  const suite = getSuiteByName("clubs");

  if (suite !== null) {
    // if (suite) {
    console.log("got suite", suite, suite === Suite.CLUBS);
  } else {
    console.log("invalid suite");
  }

  // prefer undefined
}
