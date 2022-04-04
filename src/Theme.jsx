import useThemeName from "hooks/useThemeName";
import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "services/localStorage";
import { ThemeProvider } from "styled-components";

const themes = {
  light: {
    colors: {
      background: "#e0e3eb",
      subBackground: "#f0f0f0",
      shadow: "#99a0a1",
      highlighted: "#72ff56",
      like: "#ff5656",
      foreground: "#121212",
    },
    fonts: ["Iran Sans"],
    direction: "rtl",
  },
  dark: {
    colors: {
      background: "#383838",
      subBackground: "#202121",
      shadow: "#202121",
      foreground: "#f0f0f0",
      highlighted: "#72ff56",
      like: "#ff5656",
    },
    fonts: ["Iran Sans"],
    direction: "rtl",
  },
};
const Theme = ({ children }) => {
  const currentThemeName = useThemeName();

  return (
    <ThemeProvider theme={themes[currentThemeName] || themes.light}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
