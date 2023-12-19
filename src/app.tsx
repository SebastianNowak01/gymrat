import { useState } from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./layout/home";
import NoPage from "./layout/no-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}> counts is {count} </button>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/gymrat/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
