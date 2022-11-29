export const syntaxErrorMessage = (index: number) => {
  return new SyntaxError("🚒Syntax error! Unexpected token at index: " + index);
};

export const multipleDecimalPointsErrorMessage = (points: number) => {
  return new SyntaxError("👯‍ Multiple decimal points! : " + points);
};
