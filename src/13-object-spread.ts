namespace Example13 {
  enum LogLevel {
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
  }

  interface ILogOptions {
    level?: LogLevel;
    logToConsole?: boolean;
  }

  function log(message: string, userOptions: ILogOptions = {}) {
    const options: Required<ILogOptions> = {
      level: LogLevel.INFO,
      logToConsole: true,
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
}
