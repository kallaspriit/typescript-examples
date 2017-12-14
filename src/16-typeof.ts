interface IConfig {
  [x: string]: number | string | IConfig;
}

function logConfig(config: IConfig) {
  Object.keys(config).forEach(key => {
    const value = config[key];

    if (typeof value === "number") {
      console.log(`config number ${key} = ${value}`);
    } else if (typeof value === "string") {
      console.log(`config string ${key} = ${value}`);
    } else {
      console.log(`config object ${key} = ${JSON.stringify(value)}`);
    }
  });
}

logConfig({
  host: "localhost",
  port: 3000,
  auth: {
    username: "foo",
    password: "bar"
  }
});
