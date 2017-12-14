enum LogLevel {
  INFO = "info",
  WARN = "warn",
  ERROR = "error"
  // FATAL = "fatal"
}

interface ILogOptions {
  level: LogLevel;
  logToConsole: boolean;
}

type MyPartial<T> = { [P in keyof T]?: T[P] };

function log(message: string, userOptions: MyPartial<ILogOptions> = {}) {
  const defaultOptions: ILogOptions = {
    level: LogLevel.INFO,
    logToConsole: true
  };
  const options: ILogOptions = {
    ...defaultOptions,
    ...userOptions
  };

  if (options.logToConsole) {
    console[options.level](options.level, message);
  }
}

log("Hello world!");
log("Something went wrong", {
  level: LogLevel.ERROR
});
