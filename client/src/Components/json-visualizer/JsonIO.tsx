import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Tokenize from "../../util/JSON-validating/Tokenizing/Tokenize";
import { JsonInput } from "./JsonInput";
import { JsonOutput } from "./JsonOutput";
import { Parse } from "../../util/JSON-validating/Parsing/Parse";
import LexicalAnalyze from "../../util/JSON-validating/LexicalAnalysis/LexicalAnalyze";
import axios from "axios";

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
  const [inputText, setInputText] = useState<string | undefined>();
  const [json, setJson] = useState<Object>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // useEffect(() => {}, [inputText]);
  console.log(inputText);
  const onClickHandler = async () => {
    try {
      if (inputText) {
        LexicalAnalyze(Tokenize(inputText));
        let input_data = Tokenize(inputText).join("");
        console.log(input_data);
        await axios
          .post("http://localhost:3100/", {
            input: input_data,
          })
          .then((response) => {
            if (response.data.toString() === "[]") {
              if (inputText === "[]") {
                setJson(response.data);
              } else {
                setIsError(true);
                setErrorName("Syntax Error");
                setErrorMessage("");
              }
            } else if (response.data === null) {
              setErrorName("Syntax Error");
              setErrorMessage("Parse error");
            }
            setJson(response.data);
          })
          .catch((error) => {
            setIsError(true);
            // setErrorMessage(error.request);
            console.log("error at : " + error.response.data);
          });
        // setJson(jsonParser.feed(inputText));
        setIsError(false);
        // console.log(jsonText);
      }
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
  };

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
