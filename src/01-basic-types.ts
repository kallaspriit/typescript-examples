namespace Example01 {
  // const age: number = 30;
  const age = 30;
  const isActive = true;
  const role = "admin";
  const primes: number[] = [2, 3, 5, 7, 11];

  // numeric enum
  enum Suite {
    Clubs, // 0
    Diamonds, // 1 etc
    Hearts,
    Spades
  }

  const card: [number, Suite] = [5, Suite.Clubs]; // tuple

  let something: any;
  something = 5;
  something = "test";

  function t(): void {
    // return true;
  }

  console.log({
    age,
    isActive,
    role,
    primes,
    card,
    something,
    t: t()
  });
}
