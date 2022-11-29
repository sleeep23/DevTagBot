import React from "react";
import styled from "styled-components";
import JsonIO from "./JsonIO";
import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
  box-sizing: border-box;
  background-color: #242424;
  padding: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ContentHeader = styled.div`
  box-sizing: border-box;
  width: 800px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function JsonVisualizer() {
  return (
    <ContentWrapper>
      <Link to="/">Back to Main Page</Link>
      <ContentHeader>
        <h1 style={{ textAlign: "center", color: "white" }}>
          This is Json visualizer!
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Crawling with Puppeteer is difficult to guarantee that complete
          information will be retrieved in time for various reasons, such as the
          current network status, the network status of the site to be crawled,
          and browser caching's blocking of crawling, so this part was added.
        </p>
      </ContentHeader>
      <JsonIO />
    </ContentWrapper>
  );
}

export default JsonVisualizer;
