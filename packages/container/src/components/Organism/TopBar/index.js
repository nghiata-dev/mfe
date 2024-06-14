import React from "react";
import { Link, Typography, useTheme } from "@mui/material";
import {
  Box,
  Stack,
  ToggleLanguageButton,
  ToggleColorButton,
} from "nghiata-mfe-base-components";
import { useColorModeValue } from "nghiata-mfe-base-components/hooks";
import { useTranslation } from "react-i18next";

export const TopBar = ({ baseUrl = "/", items = [], activeItem = "" }) => {
  const { palette, shadows } = useTheme();
  const { t } = useTranslation();
  const itemTextColor = useColorModeValue(palette.grey[800], palette.grey[200]);

  return (
    <Box
      paddingX={2}
      top={0}
      left={0}
      bgColor={palette.background.default}
      position={"fixed"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      width="100%"
      sx={{ transition: "0.3s all", zIndex: 1024 }}
      boxShadow={[shadows[8], 0]}
    >
      <Stack
        direction="row"
        padding={[0, 4]}
        minHeight="64px"
        justifyContent="space-between"
        alignItems="center"
        marginLeft="auto"
        marginRight="auto"
        width={["100%", "1200px"]}
      >
        <Box component={Link} width="80px" href={baseUrl}>
          {/* <Brand
            color={useColorModeValue(palette.grey[800], palette.grey[50])}
          /> */}
          NghiaTA
        </Box>
        <Stack direction="row" spacing={5} display={["none", "flex"]}>
          {items.map(({ id, url, name }) => {
            return (
              <Link
                key={id}
                href={url}
                color={itemTextColor}
                sx={{ textDecoration: "none" }}
              >
                <Typography fontWeight={activeItem === id ? "bold" : "light"}>
                  {t([name])}
                </Typography>
              </Link>
            );
          })}
        </Stack>
        <Stack direction="row" width={80} justifyContent="end" spacing={2}>
          <ToggleLanguageButton />
          <ToggleColorButton />
        </Stack>
      </Stack>
      <Stack
        pb={2}
        justifyContent="space-between"
        direction="row"
        spacing={5}
        display={["flex", "none"]}
      >
        {items.map(({ id, url, name }) => {
          return (
            <Link
              key={id}
              href={url}
              color={itemTextColor}
              sx={{ textDecoration: "none" }}
            >
              <Typography fontWeight={activeItem === id ? "bold" : "light"}>
                {name}
              </Typography>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TopBar;
