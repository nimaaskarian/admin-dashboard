import StyledPost from "./style";
import React from "react";
import { useTheme } from "styled-components";

const Post = ({ title, viewers, likes }) => {
  const theme = useTheme();
  return (
    <StyledPost>
      <StyledPost.Title>{title}</StyledPost.Title>
      <StyledPost.IconsWrapper>
        <StyledPost.IconWrapper>
          <StyledPost.IconText color={theme.colors.highlighted}>
            {viewers}
          </StyledPost.IconText>
          <StyledPost.ViewerIcon />
        </StyledPost.IconWrapper>
        <StyledPost.IconWrapper>
          <StyledPost.IconText color={theme.colors.like}>
            {likes}
          </StyledPost.IconText>
          <StyledPost.LikeIcon />
        </StyledPost.IconWrapper>
      </StyledPost.IconsWrapper>
    </StyledPost>
  );
};

export default Post;
