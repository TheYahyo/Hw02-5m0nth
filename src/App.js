import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import './style.css';
import Header2 from "./components/Header2";
// import React, { useState, useEffect } from 'react';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>

          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />

        </Route>

        <Route path="/page3" element={<Header2 />}>
          <Route path="/page3" element={<Page3 />} />
          <Route path="page4" element={<Page4 />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}



export default App;

