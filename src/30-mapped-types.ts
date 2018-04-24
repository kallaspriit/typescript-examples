interface IWriteFileOptions {
  filename: string;
  contents: string;
  encoding?: string;
}

// make all properties readonly and required (adds readonly, strips ? modifiers from all properties of T)
type ReadonlyRequired<T> = { readonly [P in keyof T]-?: T[P] };

// lack of + is the same as +
// type ReadonlyRequired<T> = { +readonly [P in keyof T]-?: T[P] };

function writeFile(userOptions: IWriteFileOptions) {
  const options: ReadonlyRequired<IWriteFileOptions> = {
    encoding: "utf8", // try commenting this out
    ...userOptions
  };

  // [ts] Cannot assign to 'encoding' because it is a constant or a read-only property.
  // options.encoding = "test";

  console.log("writeFile2", options.encoding.length, options);
}
