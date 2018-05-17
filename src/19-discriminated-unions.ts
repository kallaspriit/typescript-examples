namespace Example19 {
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

  function logShapeArea(shape: Shape) {
    switch (shape.kind) {
      case "rectangle":
        // we know that rectangle has height and width
        console.log(
          `rectangle ${shape.height}x${shape.width} has area of ${shape.height *
            shape.width}`
        );
        break;

      // try removing or renaming
      case "circle":
        // we know that circle has a radius
        console.log(
          `circle of radius ${shape.radius} has area of ${Math.PI *
            shape.radius ** 2}`
        );
        break;

      // make sure we don't forget to handle a shape kind
      default:
        assertUnreachable(
          shape,
          `got unexpected shape kind, this should not happen`
        );
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

  function assertUnreachable(_impossible: never, message: string): never {
    throw new Error(message);
  }
}
