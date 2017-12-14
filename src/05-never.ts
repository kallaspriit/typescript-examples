function assertUnreachable(_impossible: never, message: string): never {
  throw new Error(message);
}

enum Currency {
  EUR,
  USD
}

function getExchangeRate(currency: Currency): number {
  switch (currency) {
    case Currency.USD:
      return 1 / 10.0;

    case Currency.EUR:
      return 1 / 15.0;

    default:
      return assertUnreachable(
        currency,
        `Got unexpected currency "${currency}"`
      );
  }
}
