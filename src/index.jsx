import React from "react";
import { createRoot } from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import store from "./store";
import themes from "./theme/themes";
import GlobalStyles from "./styles/globalStyles";
import App from "./App";

// 🔥 Wrapper that listens to Redux theme state
function ThemedApp() {
  const themeName = useSelector((state) => state.theme.name);
  const currentTheme = themes[themeName] || themes.light;

  return (
    <MuiThemeProvider theme={createTheme(currentTheme.muiPalette)}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);
