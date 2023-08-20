import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScrollSectionContextProvider } from "./context/ScrollSectionContext";
import { SlideInSectionContextProvider } from "./context/SlideInSectionContext";
import { DataPublicContextProvider } from "./context/DataPublicContext";
import { ToDynamicContextProvider } from "./context/ToDynamicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDynamicContextProvider>
        <DataPublicContextProvider>
          <ScrollSectionContextProvider>
            <SlideInSectionContextProvider>
              <App />
            </SlideInSectionContextProvider>
          </ScrollSectionContextProvider>
        </DataPublicContextProvider>
      </ToDynamicContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
