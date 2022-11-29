import { SEPARATORS } from "../Characters";
import {
  createFalseToken,
  createNullToken,
  createNumberToken,
  createStringToken,
  createTrueToken,
} from "./CreateTokens";
import { syntaxErrorMessage } from "../ErrorHandling/Error";

export default function Tokenize(
  inputString: string
): Array<boolean | string | number | null> {
  const result: Array<boolean | string | number | null> = [];
  let cntIndex = 0;
  while (cntIndex < inputString.length) {
    if (inputString[cntIndex] === " ") {
      cntIndex++;
    }
    if (SEPARATORS.has(inputString[cntIndex])) {
      result.push(inputString);
    } else {
      switch (inputString[cntIndex]) {
        case "n":
          result.push(createNullToken(inputString, cntIndex));
          cntIndex += 4;
          continue;
        case "t":
          result.push(createTrueToken(inputString, cntIndex));
          cntIndex += 4;
          continue;
        case "f":
          result.push(createFalseToken(inputString, cntIndex));
          cntIndex += 5;
          continue;
        case '"':
        case "'":
          const stringToken = createStringToken(inputString, cntIndex);
          result.push(stringToken);
          cntIndex += stringToken.length;
      }
      if (/^[+-]?\d*(\.?\d*)?$/.test(inputString[cntIndex])) {
        let numberToken = createNumberToken(inputString, cntIndex);
        result.push(numberToken);
        cntIndex += numberToken.toString().length;
      }
      throw syntaxErrorMessage(cntIndex);
    }
  }
  return result;
}
