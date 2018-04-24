interface IRectangleShape {
  kind: "rectangle";
  width: number;
  height: number;
}
interface ICircleShape {
  kind: "circle";
  radius: number;
}

type Shape = IRectangleShape | ICircleShape;

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

function logShapeArea(shape: Shape) {
  switch (shape.kind) {
    case "rectangle":
      console.log(`rectangle has area of ${shape.height * shape.width}`);
      break;

    case "circle":
      console.log(`circle has area of ${Math.PI * shape.radius ** 2}`);
      break;

    // make sure we don't forget to handle a kind
    default:
      assertNever(shape);
  }
}

logShapeArea({
  kind: "rectangle",
  width: 10,
  height: 20
});

logShapeArea({
  kind: "circle",
  radius: 5
});
