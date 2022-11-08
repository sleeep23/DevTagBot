import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 320px;
  border-radius: 16px;
  background-color: white;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-out;
  }
`;

function Card() {
  return <CardWrapper>Card</CardWrapper>;
}

export default Card;
