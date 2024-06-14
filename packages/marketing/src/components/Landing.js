import { Box, TopBar, Typography } from "nghiata-mfe-base-components";
// import useAuth from '@hooks/common/useAuth';
// import MarketingApp from "@pages/MarketingApp";

import _get from "lodash/get";
import React from "react";

export const Landing = () => {
  // const { userLoggedInData } = useAuth()
  const userLoggedInData = null;
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="start"
      p={4}
      flexDirection="column"
    >
      <Box marginLeft="auto" marginRight="auto" textAlign="center">
        <Typography variant="h6">
          Hello,{" "}
          {_get(userLoggedInData, "userName", "") ??
            _get(userLoggedInData, "email", "")}
          .
        </Typography>
        {/* <MarketingApp /> */}
        <Typography variant="h2" fontWeight={700} color="blue">
          Welcome to Landing page
          <Box height={"200vh"} sx={{ overflowY: "auto" }}></Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Landing;
