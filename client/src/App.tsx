import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Articles from "./Components/Articles/Articles";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import JsonVisualizer from "./Components/json-visualizer/JsonVisualizer";

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export function RoutePaths() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/json-visualizer" element={<JsonVisualizer />} />
    </Routes>
  );
}

export function App() {
  const [tag, setTag] = useState<string>("HTML");
  return (
    <Layout>
      <Sidebar setTag={setTag} />
      <Articles cntTag={tag} />
    </Layout>
  );
}
