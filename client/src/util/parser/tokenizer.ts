import { SEPARATOR } from "./variables";

const error = (i: number, expect: string) => {
  return new Error(
    `SyntaxError: Unexpected token in JSON at position ${i}, expected: ${expect}`
  );
};

export default function tokenizer(str: string): string[] {
    const result: any[] = [];
    let i: number = 0;
    while (i < str.length) {
        // 공백 무시
        if (str[i] === " ") {
            i++;
            continue;
        }
        // separator -> add result directly
        if (SEPARATOR.includes(str[i])) {
            result.push(str[i++]);
            continue;
        } else {
            switch (str[i]) {
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
                    result.push(createStringToken(str[i]));
                    continue;
            }
            if (/\d|-/.test(str[i])) {
                result.push(createNumberToken());
                continue;
            }
        }
        throw error(i, "");
    }

    function createNullToken(): null {
        if (str[++i] !== "u") throw error(i, "u");
        if (str[++i] !== "l") throw error(i, "l");
        if (str[++i] !== "l") throw error(i, "l");
        ++i;
        return null;
    }

    function createTrueToken(): boolean {
        if (str[++i] !== "r") throw  error(i, "r");
        if (str[++i] !== "u") throw  error(i, "u");
        if (str[++i] !== "e") throw  error(i, "e");
        ++i;
        return true;
    }

    function createFalseToken(): boolean {
        if (str[++i] !== "a") throw error(i, "a");
        if (str[++i] !== "l") throw error(i, "l");
        if (str[++i] !== "s") throw error(i, "s");
        if (str[++i] !== "e") throw error(i, "e");
        ++i;
        return false;
    }

    function createStringToken(quotation: string): string {
        const start = i;
        // quotation includes " and '
        while (str[++i] !== quotation) {
            // ignore white space
            if (str[i] === "\\") {
                i++;
            }
        }
        return str.substring(start, ++i);
    }

    function createNumberToken(): number {
        const start = i;
        if (str[i] === "-") i++;
        let count = 0;
        while (i) {
            if (/\d|\./.test(str[i])) {
                // . -> count + 1, therefore count <= 1
                if (/\./.test(str[i])) {
                    count ++;
                }
                i++;
            } else {
                // not number
                break;
            }
        }

        if (count > 1) throw error(i, "number");
        return Number(str.substring(start, i));
    }
    return result;
}