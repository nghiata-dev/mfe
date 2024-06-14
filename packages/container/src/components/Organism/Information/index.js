import {
  Box,
  Grid,
  IconButton,
  Icons,
  TopBar,
  Typography,
} from "nghiata-mfe-base-components";
import {
  useColorMode,
  useColorModeValue,
} from "nghiata-mfe-base-components/hooks";

import _get from "lodash/get";
import React from "react";
import { IconLocation, IconAvailable } from "nghiata-mfe-base-components/icons";
import { useTheme } from "@mui/material";
import Avatar from "assets/images/avatar.jpeg";
import PingingAnimation from "components/Atom/PingingAnimation";

export const Information = () => {
  const { palette, breakpoints } = useTheme();

  return (
    <>
      <Box
        display="flex"
        alignItems="start"
        gap={4}
        sx={{
          width: "100%",
          m: "auto",
          p: "4rem 2rem",
          [breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column-reverse",
            p: "2rem 1rem",
            alignItems: "center",
          },
          [breakpoints.up("lg")]: {
            p: "6rem 7rem",
          },
          [breakpoints.up("xl")]: {
            maxWidth: "80rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 6,
            [breakpoints.down("sm")]: {
              gap: 4,
            },
          }}
        >
          <Box gap={0.5} sx={{ display: "grid" }}>
            <Typography variant="h1">Hi, I’m Nghĩa 👋</Typography>
            <Typography>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </Typography>
          </Box>
          <Box sx={{ gap: 1, display: "grid" }}>
            <Box sx={{ gap: 1, display: "flex" }}>
              <Icons Icon={IconLocation} />
              <Typography variant="body2">HCMC</Typography>
            </Box>
            <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
              <PingingAnimation />
              <Typography variant="body2">
                Available for new projects
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          as={"img"}
          loading="lazy"
          src={Avatar}
          sx={{
            objectFit: "cover",
            marginRight: "36px",
            padding: "0 6px 6px 0",
            boxShadow: `36px 36px 0px 0px ${palette.grey[200]}`,
            width: { xs: "240px", sm: "280px", md: "280px", lg: "280px" },
            height: { xs: "280px", sm: "320px", md: "320px", lg: "320px" },
            [breakpoints.down("sm")]: {
              m: 0,
              mb: "0.5rem",
              p: "0 6px 6px 6px",
              boxShadow: `0 8px 0px 8px ${palette.grey[200]}`,
            },
          }}
        />
      </Box>
    </>
  );
};

export default Information;
