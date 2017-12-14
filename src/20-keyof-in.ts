interface IAddress {
  country: string;
  street: string;
  building: number;
}

class Address implements IAddress {
  constructor(
    public country: string,
    public street: string,
    public building: number
  ) {}

  public getProperty(name: keyof IAddress) {
    return this[name];
  }
}

const myAddress = new Address("Estonia", "Lai", 29);
console.log(`building: ${myAddress.getProperty("building")}`);
// console.log(`xxx: ${myAddress.getProperty("xxx")}`);

enum LoggerLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error"
}

type LoggerLevelName = keyof typeof LoggerLevel;

function logMessage(level: LoggerLevelName, message: string) {
  console.log(`${level} ${message}`);
}

logMessage("INFO", "test");
// logMessage("XXX", "test");

type MyReadOnly<T> = { readonly [P in keyof T]: T[P] };

const readOnlyAddress: MyReadOnly<IAddress> = {
  country: "Estonia",
  street: "Lai",
  building: 29
};

// readOnlyAddress.street = 'Narva';

type FilePermissions = "READ" | "WRITE" | "EXECUTE";
type FilePermissionMap = { [K in FilePermissions]: boolean };

function createFile(
  filename: string,
  permissions: FilePermissionMap = { READ: true, WRITE: false, EXECUTE: false }
) {
  console.log("create file", filename, permissions);
}

createFile("first.txt");

createFile("second.txt", {
  READ: true,
  WRITE: true,
  EXECUTE: false
  // XXX: true
});
