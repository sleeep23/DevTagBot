import React from "react";
import styled from "styled-components";
import { tags } from "../../Const/Tags";

interface SidebarProps {
  setTag: React.Dispatch<React.SetStateAction<string>>;
}

interface TagBtnProps {
  tag: string;
}

const SidebarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #1a1a1a;
  box-sizing: border-box;
  padding: 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
`;

const TagBtnWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: #343434;
`;

function Sidebar({ setTag }: SidebarProps) {
  const tagsSelectable = tags.map((tag: string, index: number) => {
    return (
      <TagBtnWrapper key={index} onClick={() => setTag(tag)}>
        {tag}
      </TagBtnWrapper>
    );
  });
  return (
    <SidebarWrapper>
      <h2>
        <p style={{ paddingBottom: "8px", margin: "0" }}>🤔</p>
        <br /> What articles do you want to find?
      </h2>
      {tagsSelectable}
    </SidebarWrapper>
  );
}

export default Sidebar;
