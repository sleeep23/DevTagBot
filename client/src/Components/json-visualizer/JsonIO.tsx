import React from "react";
import styled from "styled-components";

const JsonIOWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const JsonInputContainer = styled.textarea`
  box-sizing: border-box;
  padding: 30px;
  background-color: #1a1a1a;
  width: 320px;
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
  width: 320px;
  height: 520px;
  border: unset;
  border-radius: 16px;
`;

const JsonInput = () => {
  return <JsonInputContainer></JsonInputContainer>;
};

const JsonOutput = () => {
  return <JsonOutputContainer></JsonOutputContainer>;
};

function JsonIO() {
  return (
    <JsonIOWrapper>
      <JsonInput />
      <span style={{ fontSize: "32px" }}>👉</span>
      <JsonOutput />
    </JsonIOWrapper>
  );
}

export default JsonIO;
