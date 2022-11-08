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
`;

function CardList() {
  const cards = articles.map((article: ArticleType) => (
    <Card key={article.id} />
  ));
  return <CardsGridContainer>{cards}</CardsGridContainer>;
}

export default CardList;
