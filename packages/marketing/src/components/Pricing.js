import { Box, TopBar, Typography } from "nghiata-mfe-base-components";
// import useAuth from '@hooks/common/useAuth';
// import MarketingApp from "@pages/MarketingApp";

import _get from "lodash/get";
import React from "react";
import { useEffect } from "react";
import { subscribe, unsubscribe } from "../../config/events";

export const Pricing = () => {
  // const { userLoggedInData } = useAuth()

  const userLoggedInData = null;
  return (
    <Box width="100%">
      <Box>
        <Typography variant="h3">Hello, </Typography>
        <Typography variant="h3" fontWeight={700} color="blue">
          Welcome to About this page
          <Box height={"200vh"} sx={{ overflowY: "auto" }}></Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Pricing;
