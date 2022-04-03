import styled from "styled-components";

export const StyledApp = styled.div`
  font-family: "Iran Sans";
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  display: grid;
  grid-gap: 15px;
  grid-template-rows: 50px 50% 1fr 1fr;
  grid-template-columns: 1fr 40% 1fr 1fr;

  grid-template-areas: "navbar navbar navbar navbar" "first second second third" "forth forth fifth sixth" "forth forth seventh eighth";
`;
