import { Box, Button, Typography } from "nghiata-mfe-base-components";
import {
  useColorMode,
  useColorModeValue,
} from "nghiata-mfe-base-components/hooks";

import _get from "lodash/get";
import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  useTheme,
} from "@mui/material";
import {
  FiberManualRecord as FiberManualRecordIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
export const Information = () => {
  const { palette, breakpoints } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        m: "auto",
        p: "4rem 2rem",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        [breakpoints.down("sm")]: {
          p: "2rem 1rem",
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
          Get in touch
        </Button>
        <Typography>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </Typography>
      </Box>
      <Box>
        <ListItem disablePadding>
          <ListItemButton href="mailto:nghiata.dev@gmail.com">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="nghiata.dev@gmail.com" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="tel:+84868683488">
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+84 868683488" />
          </ListItemButton>
        </ListItem>
      </Box>
      <Box>
        <Typography>You may also find me on these platforms!</Typography>
        <ListItem disablePadding>
          <ListItemButton
            href="https://www.facebook.com/ToAnhNghia/"
            target={"_blank"}
          >
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Information;
