import { useEffect, useState } from "react";
import { ContentProps } from "../Types/ContentType";
import LexicalAnalyze from "../util/JSON-parser/LexicalAnalysis/LexicalAnalyze";
import Tokenize from "../util/JSON-parser/Tokenizing/Tokenize";

export default function useFetch(url: string) {
  const [data, setData] = useState<Array<ContentProps>>([]);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/xml",
        "Cache-Control":
          "no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate",
      },
    })
      .then((response: Response) => {
        return response.text();
      })
      .then((response: string) => {
        try {
          LexicalAnalyze(Tokenize(response));
          setData(JSON.parse(response));
        } catch (e: any) {
          console.log("Error : " + e.response.data);
        }
      });
  }, [url]);
  return data;
}
