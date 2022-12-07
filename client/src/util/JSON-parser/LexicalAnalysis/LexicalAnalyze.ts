import { TOKEN_KEYWORDS } from "../Keywords";
import {
  arrayDepthErrorMessage,
  colonKeyErrorMessage,
  colonValueErrorMessage,
  objectDepthErrorMessage,
  quoteErrorMessage,
  separatorErrorMessage,
  syntaxErrorMessage,
} from "../ErrorHandling/Error";

export let parserDepth: number[] = [];

const commaAndColon: Array<string> = [",", ":"];
const notValue: Array<string> = ["}", "]", ",", ":"];
const notBeforeSeparator: Array<string> = ["{", "[", ",", ":"];
const notAfterSeparator: Array<string | boolean> = [
  true,
  false,
  "}",
  "]",
  ",",
  ":",
];

export interface obj {
  type: string;
  depth: number;
  value?: string | number | boolean | null;
  child?: obj[];
}

export default function LexicalAnalyze(
  tokenizedString: Array<boolean | string | number | null>
) {
  let arrayDepth = 0;
  let objectDepth = 0;
  let stringBalance = true;
  const result = tokenizedString.map(
    (element: boolean | string | number | null, idx: number) => {
      // 괄호의 짝이 안 맞을 때 error
      // 아니면 return 하기 전에 0인지 검사해도 됨
      if (arrayDepth < 0) throw arrayDepthErrorMessage(idx);
      if (objectDepth < 0) throw objectDepthErrorMessage(idx);

      const object: obj = {
        type: "",
        depth: arrayDepth !== 0 ? arrayDepth : objectDepth,
        value: undefined,
        child: undefined,
      };
      switch (typeof element) {
        case "number":
          object.type = "number";
          object.value = element;
          break;
        case "boolean":
          object.type = "boolean";
          object.value = element;
          break;
        case "object":
          object.type = "null_object";
          object.value = element;
          break;
        case "string":
          const currentTokenType: string =
            TOKEN_KEYWORDS[element.toString()[0]];
          object.type = currentTokenType;
          object.value = element;
          switch (currentTokenType) {
            case "open_array":
              if (
                commaAndColon.includes(tokenizedString[idx + 1]!.toString())
              ) {
                throw separatorErrorMessage(idx);
              }
              object.child = [];
              if (arrayDepth > 0) object.value = "arrayObject";
              else object.value = undefined;
              arrayDepth++;
              break;
            case "close_array":
              if (
                commaAndColon.includes(tokenizedString[idx - 1]!.toString())
              ) {
                throw separatorErrorMessage(idx);
              }
              arrayDepth--;
              break;
            case "open_object":
              if (
                commaAndColon.includes(tokenizedString[idx + 1]!.toString())
              ) {
                throw separatorErrorMessage(idx);
              }
              object.child = [];
              objectDepth++;
              break;
            case "close_object":
              if (
                commaAndColon.includes(tokenizedString[idx - 1]!.toString())
              ) {
                throw separatorErrorMessage(idx);
              }
              objectDepth--;
              break;
            case "separator":
              if (
                notBeforeSeparator.includes(
                  tokenizedString[idx - 1]!.toString()
                )
              ) {
                throw separatorErrorMessage(idx);
              }
              if (
                notAfterSeparator.includes(tokenizedString[idx + 1]!.toString())
              ) {
                throw separatorErrorMessage(idx);
              }
              break;
            case "colon":
              if (typeof tokenizedString[idx - 1] !== "string") {
                throw colonKeyErrorMessage(idx);
              }
              if (notValue.includes(tokenizedString[idx + 1]!.toString())) {
                throw colonValueErrorMessage(idx);
              }
              break;
            case "string":
              stringBalance = !stringBalance;
              break;
          }
      }
      parserDepth.push(object.depth);
      return object;
    }
  );
  if (arrayDepth > 0) throw arrayDepthErrorMessage();
  if (objectDepth > 0) throw objectDepthErrorMessage();
  // "이 짝수 개인지 확인, 열리고 닫히는 것 까지 확인 X
  // if (!stringBalance) throw quoteErrorMessage();
  return result;
}
