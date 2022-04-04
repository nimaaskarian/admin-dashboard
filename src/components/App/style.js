import styled from "styled-components";

export const StyledApp = styled.div`
  font-family: "Iran Sans";
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.colors.foreground};
  fill: ${(props) => props.theme.colors.foreground};

  background-color: ${(props) => props.theme.colors.background};
  padding: 1rem;
  display: grid;
  grid-gap: 0.75rem;
  font-size: 0.75rem;
  grid-template-rows: 60px 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow: hidden;
  &,
  & * {
    transition: background-color 100ms ease-in, color 100ms ease-in,
      border-color 100ms ease-in, fill 100ms ease-in;
  }
  @media only screen and (max-width: 756px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    & > * {
      min-width: initial;
      min-height: initial;
    }
    width: 100%;
  }
  & * {
    direction: ${(props) => props.theme.direction || "ltr"};
  }
  & > * {
    min-width: 0;
    min-height: 0;
  }
  grid-template-areas: "navbar navbar navbar navbar" "first second second third" "forth forth fifth sixth";
`;
