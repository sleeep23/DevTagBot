import React from "react";
import styled from "styled-components";
import ReactJson from "react-json-view";

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

export function JsonOutput({ json, isError, errorName, errorMessage }: any) {
  console.log("Server sent json is" + JSON.stringify(json));
  return (
    <JsonOutputContainer>
      {isError ? (
        <div>
          <h2 style={{ color: "tomato" }}>{errorName}</h2>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              wordBreak: "keep-all",
              whiteSpace: "pre-wrap",
            }}
          >
            {errorMessage}
          </p>
        </div>
      ) : (
        <>
          <ReactJson
            src={json}
            theme="monokai"
            indentWidth={2}
            style={{ backgroundColor: "unset", fontSize: "12px" }}
          />
        </>
      )}
    </JsonOutputContainer>
  );
}
