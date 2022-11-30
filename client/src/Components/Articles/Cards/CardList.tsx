import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { ContentProps } from "../../../Types/ContentType";
import useFetch from "../../../Hook/useFetch";

const CardsGridContainer = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(1, 280px);
  gap: 40px;
  justify-content: center;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 280px);
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 280px);
  }
  ::-webkit-scrollbar {
    display: none;
  }
  //scrollbar-gutter: unset;
`;

function CardList({ cntTag }: { cntTag: string }) {
  const data: Array<ContentProps> = useFetch(
    `http://localhost:3100/tag?tag=${cntTag}`
  );
  console.log(data);
  const cards = data.map((article: ContentProps, idx: number) => (
    <Card
      key={idx}
      title={article.title}
      author={article.author}
      link={article.link}
      overlayLink={article.overlayLink}
    />
  ));
  return <CardsGridContainer>{cards}</CardsGridContainer>;
}

export default CardList;
