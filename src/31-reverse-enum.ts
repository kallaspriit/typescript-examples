export namespace Example31 {
  enum State {
    NEW = "new",
    OLD = "old"
  }

  const apiStateValue = "old";
  const apiStateName = getStateKey(apiStateValue);

  console.log("api state", apiStateValue, apiStateName);

  // challenge: how to make generic?
  function getStateKey(statusValue: string): keyof typeof State | undefined {
    const keys = Object.keys(State) as Array<keyof typeof State>;

    return keys.find(statusKey => State[statusKey] === statusValue);
  }
}
