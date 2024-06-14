import {
  Box,
  Button,
  Grid,
  IconButton,
  Icons,
  TopBar,
  Typography,
} from "nghiata-mfe-base-components";

import _get from "lodash/get";
import React from "react";
import { useColorModeValue } from "nghiata-mfe-base-components/hooks";
import { useTheme } from "@mui/material";

import { SKILLS } from "utils/constants";

export const Information = () => {
  const { palette, breakpoints } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        m: "auto",
        p: "4rem 2rem",
        gap: 6,
        display: "grid",
        [breakpoints.down("sm")]: {
          p: "2rem 1rem",
          alignItems: "center",
          gap: 3,
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
          gap: 1,
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          color={useColorModeValue("primary", "secondary")}
          sx={{
            w: "100px",
            padding: "4px 20px",
            borderRadius: "12px",
          }}
        >
          Skills
        </Button>
        <Typography>
          The skills, tools and technologies I am really good at:
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Grid
          container
          spacing={2}
          sx={{
            rowGap: "3rem",
            [breakpoints.down("sm")]: {
              rowGap: "2rem",
            },
          }}
        >
          {SKILLS.map((skill) => (
            <Grid item xs={3} sm={2} xl={2} sx={{ textAlign: "center" }}>
              <Box as={"img"} src={skill.src} sx={{ width: 64, height: 64 }} />
              <Typography variant="body2">{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Information;
