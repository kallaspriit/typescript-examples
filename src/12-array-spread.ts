namespace Example12 {
  const evens = [0, 2, 4];
  const odds = [1, 3, 5];
  const numbers = [1, ...evens, 0, ...odds, 2];
  // const sorted = numbers.sort(); // sort modifies the array it was called on
  const sorted = [...numbers].sort(); // effectively clone the array and then sort it

  console.log({
    numbers,
    sorted
  });
}
