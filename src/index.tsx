import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ExcalidrawApp from "./excalidraw-app";

import "./excalidraw-app/pwa";
import "./excalidraw-app/sentry";
import Start from "./start/Start";
window.__EXCALIDRAW_SHA__ = process.env.REACT_APP_GIT_SHA;
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="app" element={<ExcalidrawApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
