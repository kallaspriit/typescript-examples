namespace Example21 {
  // keyof interface/class
  interface IAddress {
    country: string;
    street: string;
    building: number;
  }

  class Address implements IAddress {
    public constructor(
      public country: string,
      public street: string,
      public building: number
    ) {}

    public getProperty(name: keyof IAddress) {
      // public getProperty(name: keyof Address) {
      return this[name];
    }
  }

  const myAddress = new Address("Estonia", "Lai", 29);

  console.log(`building: ${myAddress.getProperty("building")}`);

  // but we can't do..
  // console.log(`xxx: ${myAddress.getProperty("xxx")}`);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // string enum
  enum LoggerLevel {
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
  }

  // type A = keyof LoggerLevel; // gives you properties of string
  // type B = typeof LoggerLevel; // gives you the prototype?
  // type C = keyof typeof LoggerLevel; // gives you the keys

  // typeof required for enum!
  type LoggerLevelName = keyof typeof LoggerLevel;

  function logMessage(level: LoggerLevelName, message: string) {
    console.log(`${level} ${message}`);
  }

  logMessage("INFO", "test");
  // logMessage("XXX", "test");

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // use built-in Readonly instead but just for reference
  type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

  const readOnlyAddress: MyReadonly<IAddress> = {
    country: "Estonia",
    street: "Lai",
    building: 29
  };

  // not allowed to change it
  // readOnlyAddress.street = 'Narva';

  console.log({
    readOnlyAddress
  });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  type FilePermissions = "READ" | "WRITE" | "EXECUTE";
  type FilePermissionMap = { [K in FilePermissions]: boolean };

  function createFile(
    filename: string,
    permissions: FilePermissionMap = {
      READ: true,
      WRITE: false,
      EXECUTE: false
    }
  ) {
    console.log("create file", filename, permissions);
  }

  createFile("first.txt");

  createFile("second.txt", {
    // can't omit or set non-existing one
    READ: true,
    WRITE: true,
    EXECUTE: false
    // XXX: true
  });
}
