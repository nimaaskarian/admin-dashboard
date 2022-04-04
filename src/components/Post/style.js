import styled from "styled-components";
import { ReactComponent as ChartLogo } from "assets/chart-mixed.svg";
import { ReactComponent as HeartLogo } from "assets/heart.svg";
const StyledPost = styled.div`
  border: 2px solid ${(props) => props.theme.colors.background};
  border-radius: 0.25rem;
  display: flex;
  padding: 0.25rem;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  &:not(*:last-child) {
    margin-bottom: 0.5rem;
  }
  &:hover {
    box-shadow: 0px 4px 4px -5px ${(props) => props.theme.colors.shadow};
  }
  transition: box-shadow 150ms ease-out;
`;
const Title = styled.h2`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
`;
const ViewerIcon = styled(ChartLogo)`
  height: 100%;
  max-height: 20px;
  fill: ${(props) => props.theme.colors.highlighted};
`;
const LikeIcon = styled(HeartLogo)`
  height: 100%;
  padding: 0.1rem;
  max-height: 20px;
  fill: ${(props) => props.theme.colors.like};
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const IconText = styled.h3`
  margin: 0;
  color: ${(props) => props.color};
`;
const IconsWrapper = styled.div`
  & > *:not(& > *:last-child) {
    margin: 0 0.25rem;
  }
  display: flex;
  align-items: center;
`;
StyledPost.IconText = IconText;
StyledPost.IconWrapper = IconWrapper;
StyledPost.IconsWrapper = IconsWrapper;
StyledPost.Title = Title;
StyledPost.ViewerIcon = ViewerIcon;
StyledPost.LikeIcon = LikeIcon;

export default StyledPost;
