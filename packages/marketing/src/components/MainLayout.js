import { Box } from "nghiata-mfe-base-components";
import React from "react";
function MainLayout({ children }) {
  return (
    <Box data-testid="main-layout" id="main-layout">
      <Box>{children}</Box>
    </Box>
  );
}
export default MainLayout;
