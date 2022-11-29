export const syntaxErrorMessage = (index: number) => {
  return new SyntaxError("🚒Syntax error! Unexpected token at index: " + index);
};

export const multipleDecimalPointsErrorMessage = (points: number) => {
  return new SyntaxError("👯‍ Multiple decimal points! : " + points);
};


// errors for Lexcialize.ts
export const arrayDepthErrorMessage = (index: number) => {
  return new SyntaxError("array depth error: " + index);
};

export const objectDepthErrorMessage = (index: number) => {
  return new SyntaxError("object depth error: " + index);
};

export const quoteErrorMessage = () => {
  return new SyntaxError('there are odd numbers of"');
}
