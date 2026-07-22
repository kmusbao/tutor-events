import React from "react";

import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";

import App from "@/presentation/app/App";

import theme from "@/presentation/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
