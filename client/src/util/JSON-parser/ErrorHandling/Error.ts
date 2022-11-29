export const syntaxErrorMessage = (index: number) => {
  return new SyntaxError(
    "🚒 Syntax error! Unexpected token at index: " + index
  );
};

export const multipleDecimalPointsErrorMessage = (points: number) => {
  return new SyntaxError(
    "👯‍ Multiple decimal point at index : " + `${points - 1}`
  );
};

// errors for Lexcialize.ts
class BalanceError extends SyntaxError {
  constructor(message: string) {
    super();
    this.name = "Balance Error";
    this.message = message;
  }
}
export const arrayDepthErrorMessage = (index?: number) => {
  if (typeof index !== "number") {
    return new BalanceError(`💁‍♀️ Array pair "[" doesn't matches `);
  }
  return new BalanceError(
    `💁  Array pair "]" doesn't matches at index: ` + index
  );
};

export const objectDepthErrorMessage = (index?: number) => {
  if (typeof index !== "number") {
    return new BalanceError(`💁‍♀️ Object pair "{" doesn't matches `);
  }
  return new BalanceError(
    `💁  Array pair "}" doesn't matches at index: ` + index
  );
};

export const quoteErrorMessage = () => {
  return new SyntaxError('there are odd numbers of"');
};
