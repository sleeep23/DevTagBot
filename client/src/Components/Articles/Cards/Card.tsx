import React from "react";
import styled from "styled-components";

interface ContentProps {
  title: string;
  summary: string;
  author: string;
}

const CardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 320px;
  border-radius: 16px;
  background-color: white;
  color: #242424;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease-out;
  }
`;

const CardImgWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 180px;
  background-color: #747bff;
  border-radius: 16px 16px 0 0;
`;

const CardContentWrapper = styled.div`
  box-sizing: border-box;
  height: 140px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

function Card({ title, author }: ContentProps) {
  return (
    <CardWrapper>
      <CardImgWrapper></CardImgWrapper>
      <CardContentWrapper>
        <h3 style={{ padding: "10px", margin: "0px" }}>{title}</h3>
        <p
          style={{
            padding: "0px",
            margin: "0px",
            fontWeight: "bold",
            fontSize: "12px",
            width: "100%",
            textAlign: "center",
          }}
        >
          Written by {author}
        </p>
      </CardContentWrapper>
    </CardWrapper>
  );
}

export default Card;
