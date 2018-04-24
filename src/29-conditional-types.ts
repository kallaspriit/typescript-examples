import { pick } from "lodash";

// remove types from T that are assignable to U (built in)
// type Exclude<T, U> = T extends U ? never : T;

// omit specified keys from T
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface IAccount {
  name: string;
  username: string;
  address: string; // should be private
  password: string; // should be private
}

// create a new type, omitting specific keys
type PublicAccount = Omit<IAccount, "address" | "password">;

// or we could pick the public ones
// type PublicAccount = Pick<IAccount, "name" | "username">;

function getPublicAccount(account: IAccount): PublicAccount {
  // pick public info
  return pick(account, ["name", "username"]);
  // return omit(account, ["address", "password"]); // currently returns PartialObject<T>
}

// test
const accountInfo: IAccount = {
  name: "Jack Smith",
  username: "jack",
  address: "Foobar St 1",
  password: "qwerty"
};

const publicAccountInfo = getPublicAccount(accountInfo);

console.log({
  accountInfo,
  publicAccountInfo
});
