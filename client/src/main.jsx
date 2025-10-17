import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./utils/context.jsx";
import { BookmarksContextProvider } from "./utils/bookmarksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <BookmarksContextProvider>
        <App />
      </BookmarksContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
