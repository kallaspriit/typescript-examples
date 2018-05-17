namespace Example28 {
  interface ITranslations {
    [x: string]: string | undefined;
  }

  type ConcatenatableToken = string | number | undefined;

  const translations: ITranslations = {
    "$ is $ years old.": "$ on $ aastane."
  };

  function t(
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
        `${result}${part}${expressions[i] !== undefined ? expressions[i] : ""}`,
      ""
    );
  }

  const user = {
    name: "Priit",
    age: 30
  };

  console.log(t`${user.name} is ${user.age} years old.`);
  console.log(t`Welcome back ${user.name}!`);
}
