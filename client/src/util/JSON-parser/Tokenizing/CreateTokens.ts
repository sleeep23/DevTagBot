import {
  multipleDecimalPointsErrorMessage,
  syntaxErrorMessage,
} from "../ErrorHandling/Error";

interface IProps {
  idx: number;
}
const consumeCharacter = (
  inputString: string,
  cntIdx: IProps,
  char: string
) => {
  if (inputString[cntIdx.idx] === char) {
    cntIdx.idx++;
  }
  throw syntaxErrorMessage(cntIdx.idx);
};

export function createNullToken(inputString: string, idx: number) {
  let cntIdx = { idx: idx };
  consumeCharacter(inputString, cntIdx, "n");
  consumeCharacter(inputString, cntIdx, "u");
  consumeCharacter(inputString, cntIdx, "l");
  consumeCharacter(inputString, cntIdx, "l");
  return null;
}

export function createTrueToken(inputString: string, idx: number) {
  let cntIdx = { idx: idx };
  consumeCharacter(inputString, cntIdx, "t");
  consumeCharacter(inputString, cntIdx, "r");
  consumeCharacter(inputString, cntIdx, "u");
  consumeCharacter(inputString, cntIdx, "e");
  return true;
}

export function createFalseToken(inputString: string, idx: number) {
  let cntIdx = { idx: idx };
  consumeCharacter(inputString, cntIdx, "f");
  consumeCharacter(inputString, cntIdx, "a");
  consumeCharacter(inputString, cntIdx, "l");
  consumeCharacter(inputString, cntIdx, "s");
  consumeCharacter(inputString, cntIdx, "e");
  return false;
}

export function createStringToken(inputString: string, cntIdx: number): string {
  const stringStartIdx = cntIdx;
  while (inputString[++cntIdx] !== inputString[stringStartIdx]) {
    if (inputString[cntIdx] === "\\") {
      cntIdx++;
    }
  }
  return inputString.substring(stringStartIdx, ++cntIdx);
}

export function createNumberToken(inputString: string, cntIdx: number): number {
  const numberStartIdx = cntIdx;
  let decimalPoint = 0;
  if (inputString[cntIdx] === "-") cntIdx++;
  while (true) {
    if (/^[+-]?\d*(\.?\d*)?$/.test(inputString[cntIdx])) {
      cntIdx++;
      if (inputString[cntIdx] === ".") {
        decimalPoint++;
      }
    } else {
      break;
    }
  }
  if (decimalPoint > 1) throw multipleDecimalPointsErrorMessage(decimalPoint);
  return Number(inputString.substring(numberStartIdx, cntIdx));
}
