import React from "react";
import styled from "styled-components";
import CardList from "./Cards/CardList";

interface ArticlesProp {
  cntTag: string;
}

const ArticlesWrapper = styled.div`
  width: calc(100% - 300px);
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;

function Articles({ cntTag }: ArticlesProp) {
  return (
    <ArticlesWrapper>
      <h1 style={{ boxSizing: "border-box", paddingTop: "40px" }}>
        Articles of {cntTag}
      </h1>
      <CardList />
    </ArticlesWrapper>
  );
}

export default Articles;
