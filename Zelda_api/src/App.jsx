import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
