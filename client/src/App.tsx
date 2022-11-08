import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Articles from "./Components/Articles/Articles";
import styled from "styled-components";

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [tag, setTag] = useState<string>("Tag1");

  return (
    <Layout>
      <Sidebar setTag={setTag} />
      <Articles cntTag={tag} />
    </Layout>
  );
}

export default App;
