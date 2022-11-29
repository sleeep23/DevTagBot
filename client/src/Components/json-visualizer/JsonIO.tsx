import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";

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

const JsonInputContainer = styled.textarea`
  box-sizing: border-box;
  padding: 30px;
  background-color: #1a1a1a;
  width: 400px;
  height: 520px;
  border: unset;
  border-radius: 16px;
  color: white;
  text-align: left;
  word-break: keep-all;
  white-space: pre-wrap;
  resize: none;
`;

const JsonOutputContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  background-color: #1a1a1a;
  width: 400px;
  height: 520px;
  border: unset;
  border-radius: 16px;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const JsonInput = ({
  setInputText,
}: {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleMessageChange = (e: any) => {
    setInputText(e.target.value);
  };
  return (
    <JsonInputContainer
      placeholder="Write the JSON string!"
      onChange={handleMessageChange}
    />
  );
};

const JsonOutput = ({ inputText }: { inputText: string }) => {
  const [json, setJson] = useState<Object>({});
  const [isError, setIsError] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  useEffect(() => {
    try {
      setJson(JSON.parse(inputText));
      setIsError(false);
    } catch (err: unknown) {
      setIsError(true);
      if (err instanceof SyntaxError) {
        setErrorName(err.name);
        setErrorMessage(err.message);
      }
    }
  }, [inputText]);
  return (
    <JsonOutputContainer>
      {isError ? (
        <div>
          <h2 style={{ color: "tomato" }}>{errorName}</h2>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <ReactJson
          src={json}
          theme="monokai"
          indentWidth={2}
          style={{ backgroundColor: "unset", fontSize: "12px" }}
        />
      )}
    </JsonOutputContainer>
  );
};

function JsonIO() {
  const [inputText, setInputText] = useState("{}");
  const [parseText, setParseText] = useState("{}");
  const onClickHandler = () => {
    setParseText(inputText);
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
      <JsonOutput inputText={parseText} />
    </JsonIOWrapper>
  );
}

export default JsonIO;
