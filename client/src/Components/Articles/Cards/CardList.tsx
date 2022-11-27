import React from "react";
import { articles } from "../../../Const/Articles";
import styled from "styled-components";
import Card from "./Card";
import { ArticleType } from "../../../Types/types";

const CardsGridContainer = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 240px);
  gap: 40px;
  justify-content: center;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 240px);
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 240px);
  } ;
`;

function CardList() {
  const cards = articles.map((article: ArticleType) => (
    <Card
      key={article.id}
      title={article.title}
      summary={article.content}
      author={article.author as string}
    />
  ));
  return <CardsGridContainer>{cards}</CardsGridContainer>;
}

export default CardList;
