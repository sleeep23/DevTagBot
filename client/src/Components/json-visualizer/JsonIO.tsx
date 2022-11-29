import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";
import Tokenize from "../../util/JSON-parser/Tokenizing/Tokenize";
import { JsonInput } from "./JsonInput";
import { JsonOutput } from "./JsonOutput";
import { Parse } from "../../util/JSON-parser/Parsing/Parse";
import LexicalAnalyze from "../../util/JSON-parser/LexicalAnalysis/LexicalAnalyze";

const JsonIOWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

function JsonIO() {
  const [inputText, setInputText] = useState<string>("");
  const [json, setJson] = useState<Object>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // useEffect(() => {}, [inputText]);

  const onClickHandler = useCallback(() => {
    try {
      setJson(Parse(LexicalAnalyze(Tokenize(inputText))) as Object);
      setIsError(false);
      console.log("Tokenized!");
      // console.log(jsonText);
    } catch (err: unknown) {
      setIsError(true);
      if (err instanceof SyntaxError) {
        setErrorName(err.name);
        setErrorMessage(err.message);
      } else if (err instanceof Error) {
        setErrorName(err.name);
        setErrorMessage(err.message);
      }
    }
  }, [inputText]);

  return (
    <JsonIOWrapper>
      <JsonInput setInputText={setInputText} />
      <button
        style={{
          fontSize: "20px",
          padding: "8px",
          margin: "0",
          color: "white",
          backgroundColor: "#1a1a1a",
        }}
        onClick={onClickHandler}
      >
        👉 Parse!
      </button>
      <JsonOutput
        json={json}
        isError={isError}
        errorName={errorName}
        errorMessage={errorMessage}
      />
    </JsonIOWrapper>
  );
}

export default JsonIO;
