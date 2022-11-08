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
  background-color: #535bf2;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 12px;
`;

const TagBtnWrapper = styled.button`
  width: fit-content;
  height: fit-content;
`;

function Sidebar({ setTag }: SidebarProps) {
  const tagsSelectable = tags.map((tag: string, index: number) => {
    return (
      <TagBtnWrapper key={index} onClick={() => setTag(tag)}>
        {tag}
      </TagBtnWrapper>
    );
  });
  return <SidebarWrapper>{tagsSelectable}</SidebarWrapper>;
}

export default Sidebar;
