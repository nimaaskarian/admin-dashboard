import { createGlobalStyle } from "styled-components";
// import FiraSans from "./FiraSans-Thin.ttf";
import IranSans from "./IRANSansWeb_Light.woff";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Iran Sans';
  src: url(${IranSans}) format('woff');
}
`;

export default FontStyles;
