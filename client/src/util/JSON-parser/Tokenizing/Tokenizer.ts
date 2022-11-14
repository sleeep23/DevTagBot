import { SEPARATOR } from "../Separator";
import {
  createFalseToken,
  createNullToken,
  createNumberToken,
  createStringToken,
  createTrueToken,
} from "./CreateTokens";
import { syntaxErrorMessage } from "../ErrorHandling/Error";

export default function Tokenizer(
  inputString: string
): Array<boolean | string | number | null> {
  const result: Array<boolean | string | number | null> = [];
  let cntIndex = 0;
  while (cntIndex < inputString.length) {
    if (inputString[cntIndex] === " ") {
      cntIndex++;
    }
    if (SEPARATOR.includes(inputString[cntIndex])) {
      result.push(inputString);
    } else {
      switch (inputString[cntIndex]) {
        case "n":
          result.push(createNullToken());
          cntIndex += 4;
          continue;
        case "t":
          result.push(createTrueToken());
          cntIndex += 4;
          continue;
        case "f":
          result.push(createFalseToken());
          cntIndex += 5;
          continue;
        case '"':
        case "'":
          const stringToken = createStringToken(inputString, cntIndex);
          result.push(stringToken);
          cntIndex += stringToken.length;
      }
      if (/^[+-]?\d*(\.?\d*)?$/.test(inputString[cntIndex])) {
        const numberToken = createNumberToken(inputString, cntIndex);
        result.push(numberToken);
        cntIndex += numberToken.toString().length;
      }
      throw syntaxErrorMessage(cntIndex);
    }
  }
  return result;
}
