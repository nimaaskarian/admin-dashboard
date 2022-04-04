import React from "react";
import { ThemeProvider } from "styled-components";

const lightRtl = {
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
};
const darkRtl = {
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
};
const Theme = ({ children }) => (
  <ThemeProvider theme={lightRtl}>{children}</ThemeProvider>
);
export default Theme;
