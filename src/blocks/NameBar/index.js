import styled from "styled-components";

const NameBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
const Image = styled.img`
  height: 100%;
  border-radius: 100px;
  max-height: 32px;
`;
const Name = styled.h4`
  margin: 0;
  margin-left: 0.5rem;
`;
const ToggleThemeButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  height: 32px;
  padding: 0.35rem;
  width: fit-content;
  & > * {
    max-height: 32px;
    height: 100%;
  }
  margin-left: 0.25rem;
`;
NameBar.ToggleThemeButton = ToggleThemeButton;
NameBar.Image = Image;
NameBar.Name = Name;

export default NameBar;
