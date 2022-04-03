import styled from "styled-components";

const FloatingCard = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.subBackground};
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 4px 9px -2px #99a0a1;
  }
  grid-area: ${(props) => props.area};
  transition: box-shadow 150ms ease-out;
  box-shadow: 0px 4px 3px -3px #99a0a1;
`;

export default FloatingCard;
