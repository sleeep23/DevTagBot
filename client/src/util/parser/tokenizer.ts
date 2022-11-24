import { SEPARATOR } from "./variables";

export default function tokenizer(str: string): string[] {
    const result: any[] = [];
    let i: number = 0;
    while (i < str.length) {
        // pass
    }

    function createNullToken(): null {}

    function createTrueToken(): boolean {}

    function createFalseToken(): boolean {}

    function createStringToken(quotation: string): string {}

    function createNumberToken() {}

    return result;
}