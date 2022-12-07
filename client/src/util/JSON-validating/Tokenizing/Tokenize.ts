import { SEPARATOR } from "../Characters";
import {
  multipleDecimalPointsErrorMessage,
  syntaxErrorMessage,
} from "../ErrorHandling/Error";

export default function Tokenize(
  inputString: string
): Array<boolean | string | number | null> {
  const result: Array<boolean | string | number | null> = [];
  let cntIndex = 0;

  const createNullToken = (): null => {
    // 각 문자별로 에러 메세지 명시
    if (inputString[++cntIndex] !== "u") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "l") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "l") throw syntaxErrorMessage(cntIndex);
    ++cntIndex;
    return null;
  };

  const createTrueToken = (): boolean => {
    // 각 문자별로 에러 메세지 명시
    if (inputString[++cntIndex] !== "r") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "u") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "e") throw syntaxErrorMessage(cntIndex);
    ++cntIndex;
    return true;
  };

  const createFalseToken = (): boolean => {
    // 각 문자별로 에러 메세지 명시
    if (inputString[++cntIndex] !== "a") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "l") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "s") throw syntaxErrorMessage(cntIndex);
    if (inputString[++cntIndex] !== "e") throw syntaxErrorMessage(cntIndex);
    ++cntIndex;
    return false;
  };

  const createStringToken = (quotation: string): string => {
    const start = cntIndex;
    if (cntIndex === inputString.length - 1) {
      // 문자열 끝 오류라고 명시
      throw syntaxErrorMessage(cntIndex);
    }
    while (
      inputString[++cntIndex] !== quotation &&
      cntIndex !== inputString.length - 1
    ) {
      if (inputString[cntIndex] === "\\") {
        cntIndex++;
      }
    }
    return inputString.substring(start, ++cntIndex);
  };

  const createNumberToken = (): number => {
    const start = cntIndex;
    if (inputString[cntIndex] === "-") cntIndex++;
    let count = 0;
    while (cntIndex) {
      if (/^[+-]?\d*(\.?\d*)?$/.test(inputString[cntIndex])) {
        if (/\./.test(inputString[cntIndex])) {
          count++;
        }
        cntIndex++;
      } else {
        // 여기에 정규식 표현 에러 메세지 명시
        break;
      }
    }
    if (count > 1) throw multipleDecimalPointsErrorMessage(cntIndex);

    return Number(inputString.substring(start, cntIndex));
  };

  while (cntIndex < inputString.length) {
    if (inputString[cntIndex] === " ") {
      cntIndex++;
    }
    if (SEPARATOR.includes(inputString[cntIndex])) {
      result.push(inputString[cntIndex++]);
    } else {
      switch (inputString[cntIndex]) {
        case "n":
          result.push(createNullToken());
          continue;
        case "t":
          result.push(createTrueToken());
          continue;
        case "f":
          result.push(createFalseToken());
          continue;
        case '"':
        case "'":
          result.push(createStringToken(inputString[cntIndex]));
          continue;
      }
      if (/^[+-]?\d*(\.?\d*)?$/.test(inputString[cntIndex])) {
        result.push(createNumberToken());
        continue;
      }
      throw syntaxErrorMessage(cntIndex);
    }
  }
  console.log("No Problem in Tokenizing!");
  return result;
}
