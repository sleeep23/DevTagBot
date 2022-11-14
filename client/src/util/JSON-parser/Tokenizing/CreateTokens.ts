import { multipleDecimalPointsErrorMessage } from "../ErrorHandling/Error";

export function createNullToken() {
  return null;
}

export function createTrueToken() {
  return true;
}

export function createFalseToken() {
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
