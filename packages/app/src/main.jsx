import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import Components from "./pages/components";
import Elements from "./pages/components/Elements";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="components">
            <Route index element={<Components />} />
            <Route path="elements" element={<Elements />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
