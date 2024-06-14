import { Box, Button, Typography } from "nghiata-mfe-base-components";
import { useColorModeValue } from "nghiata-mfe-base-components/hooks";
import Avatar from "assets/images/avatar.jpeg";

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
import { Check as CheckIcon } from "@mui/icons-material";
export const AboutMe = () => {
  const { palette, breakpoints } = useTheme();

  return (
    <Box
      width="100%"
      sx={{
        textAlign: "center",
        backgroundColor: palette.grey[50],
        width: "100%",
        maxWidth: "100%",
        m: "auto",
        p: "4rem 2rem",
        [breakpoints.down("sm")]: {
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
      <Button
        color={useColorModeValue("primary", "secondary")}
        sx={{
          padding: "4px 20px",
          borderRadius: "12px",
          [breakpoints.down("sm")]: {},
        }}
      >
        About me
      </Button>
      <Box
        gap={6}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          p: "2rem 0",
          [breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          [breakpoints.up("xl")]: {
            p: "4rem 2rem",
          },
        }}
      >
        <Box
          as={"img"}
          loading="lazy"
          src={Avatar}
          sx={{
            objectFit: "cover",
            width: { xs: "240px", sm: "400px", md: "400px", lg: "400px" },
            height: { xs: "280px", sm: "480px", md: "480px", lg: "480px" },
            marginLeft: "36px",
            padding: "0 0 6px 6px",
            boxShadow: `-36px 36px 0px 0px ${palette.grey[200]}`,
          }}
        />
        <Box
          sx={{
            display: "block",
            textAlign: "left",
            display: "grid",
            gap: 2,
            w: "50%",
            [breakpoints.down("sm")]: {
              w: "100%",
            },
            [breakpoints.up("sm")]: {
              w: "50%",
            },
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ marginBottom: "8px" }}
          >
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </Typography>
          <Typography>
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </Typography>
          <Box>
            <Typography>
              Finally, some quick bits about me.
              <Box sx={{ display: "flex", gap: 4 }}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                </List>
              </Box>
            </Typography>
          </Box>
          <Typography>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
