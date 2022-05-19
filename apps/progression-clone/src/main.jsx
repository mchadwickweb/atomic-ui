import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import FrameworkPage from "./pages/framework";

import "./index.css";
import PositionsPage from "./pages/positions";

const queryClient = new QueryClient();

/**
 * Two routes /framework and /positions.
 *
 * Both routes will render Positions and then subsequently the Avatar query to the mock api for users.
 *
 * The goal here is to show that most of the data can be front loaded but smaller and less priority data
 * on pages like framework can come later down the line.
 *
 * When you go to a framework page most of the data comes in at the page component
 * level. However, the avatars are a seperate call which is built into the Avatarlist component.
 *
 * This is where you could optimise that initial call and lazy load user avatars later.
 *
 * If you then navigate to /positions I load a single position that
 * loads the AvatarList component again running the query for users, again.
 * But this time its cached. Meaning you can move around the app now without
 * making subsequent requests for each page.
 */

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="framework" element={<FrameworkPage />} />
            <Route path="positions" element={<PositionsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
