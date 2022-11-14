export const syntaxErrorMessage = (index: number) => {
  return new Error("🚒Syntax error! Unexpected token at index: " + index);
};

export const multipleDecimalPointsErrorMessage = (points: number) => {
  return new Error("👯‍ Multiple decimal points! : " + points);
};
