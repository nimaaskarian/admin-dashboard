import styled from "styled-components";

const FloatingCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.subBackground};
  border-radius: 8px;
  &:hover {
    box-shadow: 0px 4px 9px -2px ${(props) => props.theme.colors.shadow};
  }
  grid-area: ${(props) => props.area};
  transition: box-shadow 150ms ease-out;
  box-shadow: 0px 4px 3px -3px ${(props) => props.theme.colors.shadow};
  & > * {
    width: 100%;
    height: 100%;
  }
`;
const MainHeader = styled.h1`
  margin: 0;
`;
const SmallHeader = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;
const SmallText = styled.span`
  font-size: 14px;
  margin: 0;
`;
const HighlightedText = styled(SmallText)`
  color: ${(props) => props.theme.colors.highlighted};
  font-weight: 700;
`;
FloatingCard.HighlightedText = HighlightedText;
FloatingCard.SmallText = SmallText;
FloatingCard.SmallHeader = SmallHeader;
FloatingCard.MainHeader = MainHeader;

export default FloatingCard;
