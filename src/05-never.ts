namespace Example05 {
  function assertUnreachable(_impossible: never, message: string): never {
    throw new Error(message);
  }

  enum Currency {
    EUR,
    USD
  }

  function getExchangeRate(currency: Currency): number {
    switch (currency) {
      // order is not important
      case Currency.USD:
        return 1 / 10.0;

      // try changing / commeting out
      case Currency.EUR:
        return 1 / 15.0;

      default:
        return assertUnreachable(
          currency,
          `Got unexpected currency "${currency}"`
        );
    }
  }

  console.log(getExchangeRate(Currency.EUR));
  // console.log(getExchangeRate("EUR")); // Argument of type '"EUR"' is not assignable to parameter of type 'Currency'
  console.log(getExchangeRate(1)); // this actually works
  console.log(getExchangeRate(5)); // and TypeScript allows this as well but will fail at runtime
  // https://github.com/Microsoft/TypeScript/issues/21546
}
