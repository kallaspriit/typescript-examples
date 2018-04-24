interface ITranslations {
  [x: string]: string | undefined;
}

type ConcatenatableToken = string | number;

const translations: ITranslations = {
  "hello $ of $ years old!": "tere $ kes sa oled $ aastane!"
};

// tslint:disable-next-line:no-any
function translate(
  parts: TemplateStringsArray,
  ...expressions: ConcatenatableToken[]
): string {
  const translationKey = parts.join("$");
  const translation = translations[translationKey];
  const useTranslation =
    translation !== undefined ? translation : translationKey;
  const translatedParts = useTranslation.split("$");

  // console.log("translate", {
  //   parts,
  //   expressions,
  //   translationKey,
  //   translation,
  //   useTranslation,
  //   translatedParts
  // });

  return translatedParts.reduce(
    (result, part, i) =>
      `${result}${part}${expressions[i] ? expressions[i] : ""}`,
    ""
  );
}

const user = {
  name: "Priit",
  age: 30
};

console.log(translate`hello ${user.name} of ${user.age} years old!`);
console.log(translate`greetings ${user.name}!`);
