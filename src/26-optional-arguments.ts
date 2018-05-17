namespace Example25 {
  interface IWriteFileOptions1 {
    filename: string;
    contents: string;
    encoding: string;
  }

  // this makes all options optional
  function writeFile1(userOptions: Partial<IWriteFileOptions1> = {}) {
    const options: IWriteFileOptions1 = {
      contents: "",
      encoding: "utf8",
      filename: "untitled.txt",
      ...userOptions
    };

    console.log("writeFile1", options);
  }

  // use all defaults
  writeFile1();

  // override some parameters
  writeFile1({ filename: "new.txt", contents: "hello world" });

  // while this works, we actually want to make some parameters optionals and other required
  interface IWriteFileOptions2 {
    filename: string;
    contents: string;
    encoding?: string;
  }

  // this is already built in since TS2.8 - removes the ? modifier
  // type Required<T> = { [P in keyof T]-?: T[P] };

  function writeFile2(userOptions: IWriteFileOptions2) {
    // required makes sure that we don't forget anything
    const options: Required<IWriteFileOptions2> = {
      encoding: "utf8", // try commenting this out
      ...userOptions
    };

    console.log("writeFile2", options.encoding.length, options);
  }

  // can't use without any arguments
  // writeFile2();

  // provide required parameters
  writeFile2({
    contents: "some contents",
    filename: "test.txt"
  });

  // can still provide optional parameters
  writeFile2({
    contents: "new contents",
    encoding: "ansi",
    filename: "new.txt"
  });
}
