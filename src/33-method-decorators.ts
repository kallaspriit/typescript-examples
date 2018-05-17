// tslint:disable:no-any

function protocol(protocolName: string) {
  console.log(`protocol() evaluated: ${protocolName}"`);

  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log("protocol() called", {
      target,
      propertyKey,
      descriptor,
      protocolName
    });

    const originalValue = descriptor.value;

    descriptor.value = function() {
      const originalResult = originalValue.call(this);

      return `${protocolName}://${originalResult}`;
    };
  };
}

class Invoice {
  public constructor(public id: string) {}

  @protocol("https")
  public getUrl() {
    console.log("Invoice.getUrl called");

    return `example.com/invoice/${this.id}`;
  }
}

const invoice = new Invoice("xxx");

console.log("invoice url", invoice.getUrl());
