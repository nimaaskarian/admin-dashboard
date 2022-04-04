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

NameBar.Image = Image;
NameBar.Name = Name;

export default NameBar;
