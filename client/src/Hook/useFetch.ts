import { useEffect, useState } from "react";
import { ContentProps } from "../Types/types";

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
        setData(JSON.parse(response));
      });
  }, [url]);
  return data;
}
