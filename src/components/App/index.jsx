import FloatingCard from "blocks/FloatingCard";
import React from "react";
import Theme from "Theme";

import { StyledApp } from "./style";
const App = () => {
  return (
    <Theme>
      <StyledApp>
        <FloatingCard area="navbar"></FloatingCard>
        <FloatingCard area="first"></FloatingCard>
        <FloatingCard area="second"></FloatingCard>
        <FloatingCard area="third"></FloatingCard>
        <FloatingCard area="forth"></FloatingCard>
        <FloatingCard area="fifth"></FloatingCard>
        <FloatingCard area="sixth"></FloatingCard>
        <FloatingCard area="seventh"></FloatingCard>
        <FloatingCard area="eighth"></FloatingCard>
      </StyledApp>
    </Theme>
  );
};

export default App;
