const car = [1997, "Mitsubishi", "Lancer Evolution IV RS"];

const [year, make, model, invalid] = car;

// same as above
// const year = car[0];
// const make = car[1];
// const model = car[2];
// const invalid = car[3];

console.log(`I drive a ${make} ${model} from ${year}`, typeof invalid);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getCardName([rank, suite]: [number, string] = [2, "hearts"]): string {
  return `${rank} of ${suite}`;
}

const cardName1 = getCardName([5, "clubs"]);
const cardName2 = getCardName();

console.log(cardName1, cardName2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const evenNumbers = [0, 2, 4, 6, 8, 10];
const [firstEven, secondEven, ...restEvens] = evenNumbers;

console.log(
  `first even: ${firstEven}, second: ${secondEven}, rest: ${restEvens.join(
    ", "
  )}`
);
