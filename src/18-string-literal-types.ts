type MouseEventType = "mouse-down" | "mouse-up";

interface IMouseEvent {
  type: MouseEventType;
  x: number;
  y: number;
}

function handleMouseEvent(event: IMouseEvent) {
  console.log(`got mouse event "${event.type}" at ${event.x}x${event.y}`);
}

handleMouseEvent({
  type: "mouse-down",
  // type: "xxx",
  x: 100,
  y: 200
});

// you can also use numeric literal types
type DiceFace = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceFace {
  // TS, trust me..
  return Math.ceil(Math.random() * 6) as DiceFace;
  // return Math.ceil(Math.random() * 12) as DiceFace; // return 1..12
}

function spellResult(face: DiceFace): string {
  switch (face) {
    case 1:
      return "rolled a one";

    case 2:
      return "rolled a two";

    case 3:
      return "rolled a three";

    case 4:
      return "rolled a four";

    case 5:
      return "rolled a five";

    case 6:
      return "rolled a six";

    // can't add a non-existing one..
    // [ts] Type '7' is not comparable to type 'DiceFace'.
    // case 7:
    //   return "rolled a seven";

    // can't forget one..
    default:
      return unreachable(face, `forgot to handle dice face: ${face}`);
  }
}

const diceFace = rollDice();
const result = spellResult(diceFace);

console.log("dice", diceFace, result);

function unreachable(_impossible: never, message: string): never {
  throw new Error(message);
}
