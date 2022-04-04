import styled from "styled-components";

export const StyledApp = styled.div`
  font-family: "Iran Sans";
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  display: grid;
  grid-gap: 0.75rem;
  font-size: 0.75rem;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;
  & * {
    direction: ${(props) => props.theme.direction || "ltr"};
  }
  & > * {
    min-width: 0;
    min-height: 0;
  }
  grid-template-areas: "navbar navbar navbar navbar" "first second second third" "forth forth fifth sixth";
`;
