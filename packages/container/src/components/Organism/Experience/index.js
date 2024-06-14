import {
  Box,
  Button,
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
import { useTheme } from "@mui/material";
import { SKILLS, PROJECTS } from "utils/constants";
export const Information = () => {
  const { palette, breakpoints } = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: palette.grey[50],
        textAlign: "center",
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
          p: "6rem 7rem",
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
          Experiences
        </Button>
        <Typography>
          Here is a quick summary of my most recent experiences:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          [breakpoints.down("sm")]: {
            gap: 3,
          },
        }}
      >
        {PROJECTS.map((project) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 4,
              w: "100%",
              maxWidth: "56rem",
              backgroundColor: useColorModeValue("#ffffff", "#1F2937"),
              borderRadius: "12px",
              [breakpoints.down("sm")]: {
                p: "2rem",
                alignItems: "flex-start",
                gap: 2,
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Box
              as={"img"}
              src={project.logo}
              sx={{
                [breakpoints.down("sm")]: {
                  order: 1,
                },
              }}
            />
            <Box
              sx={{
                p: "0 3rem",
                [breakpoints.down("sm")]: {
                  p: 0,
                  order: 3,
                  textAlign: "left",
                },
              }}
            >
              <Typography variant="h6">{project.position}</Typography>
              <Box
                as={"ul"}
                sx={{
                  p: "0 2rem",
                  [breakpoints.down("sm")]: {
                    p: "0.5rem 0",
                    m: 0,
                  },
                }}
              >
                {project.positionDescription.map((position) => (
                  <Box as="li">{position}</Box>
                ))}
              </Box>
            </Box>
            <Typography
              sx={{
                [breakpoints.down("sm")]: {
                  order: 2,
                },
              }}
            >
              {project.from} - {project.to}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Information;
