class Cat {
  public constructor(public name: string, public age: number) {}
}

const cats: Cat[] = [
  new Cat("Ashes", 3),
  new Cat("Puss", 5),
  new Cat("Daisy", 1),
  new Cat("Max", 9)
];

interface IHasAge {
  age: number;
  // tslint:disable-next-line:no-any
  [x: string]: any;
}

function getAverageAge(
  // tslint:disable-next-line:no-any
  items: Array<{ age: number; [x: string]: any }>
): number {
  // function getAverageAge(items: IHasAge[]): number {
  const ageSum = items.reduce((sum, item) => sum + item.age, 0);

  return ageSum / items.length;
}

console.log(`average age of cats: ${getAverageAge(cats)}`);
console.log(
  `average age pop stars: ${getAverageAge([
    { artist: "Ed Sheeran", age: 23 },
    { stageName: "Adele", age: 26 }
  ])}`
);

// reducing objects to objects
interface ICatAgeMap {
  [x: string]: number;
}

const catAgeMap = cats.reduce<ICatAgeMap>(
  (map, cat) => ({ ...map, [cat.name]: cat.age }),
  {}
);

console.log("cat ages", catAgeMap);

// reducing objects - initial value?
enum LogType {
  INFO = "info",
  ERROR = "error"
}

// same as
// type LogCountMap = {
//   info: number;
//   error: number;
// }
type LogCountMap = { [key in LogType]: number };

class LogEntry {
  public constructor(public type: LogType, public message: string) {}
}

const logEntries: LogEntry[] = [
  new LogEntry(LogType.INFO, "loaded config"),
  new LogEntry(LogType.INFO, "started server"),
  new LogEntry(LogType.ERROR, "connecting to database failed")
];

// we want:
// {
//   info: 2,
//   error: 1
// }

const logCountMap: LogCountMap = logEntries.reduce(
  (map, logEntry) => {
    const existingCounter = map[logEntry.type];

    // typescript actually (correctly) thinks that this is definitely a number!
    // tslint:disable-next-line:strict-type-predicates
    if (existingCounter === undefined) {
      map[logEntry.type] = 0;
    }

    map[logEntry.type]++;

    return map;
  },
  // how to define initial value?
  // {} // [ts] Type '{}' is not assignable to type 'LogCountMap'. Property 'INFO' is missing in type '{}'.
  // { info: 0, error: 0 } // works but need to be explicit
  // tslint:disable-next-line:no-any
  ({} as any) as LogCountMap // works but not entirely correct
);

console.log("logCountMap", logCountMap.info, logCountMap);

// challenge: make it return enum keys INFO, ERROR instead of values info, error
// {
//   INFO: 2,
//   ERROR: 1
// }
