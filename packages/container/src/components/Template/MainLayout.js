import { Box } from "nghiata-mfe-base-components";
import React from "react";
import Header from "components/Header";
function MainLayout({ children }) {
  return (
    <Box data-testid="main-layout" id="main-layout">
      <Header />
      <Box>{children}</Box>
    </Box>
  );
}
export default MainLayout;
