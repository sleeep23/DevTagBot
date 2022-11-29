import { TOKEN_KEYWORDS } from "../Keywords";

// const type;

export function Lexicalize(
  tokenizedString: Array<boolean | string | number | null>
) {
  const result = tokenizedString.map(
    (element: boolean | string | number | null, idx: number) => {
      // const currentTokenType;
      switch (typeof element) {
        case "number":
        // currentTokenType = "";
      }
    }
  );
}
