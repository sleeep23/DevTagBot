import React from "react";
import styled from "styled-components";

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

export function JsonInput({
  setInputText,
}: {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleMessageChange = (e: any) => {
    setInputText(e.target.value);
  };
  return (
    <JsonInputContainer
      placeholder="Write the JSON string!"
      onChange={handleMessageChange}
    />
  );
}
