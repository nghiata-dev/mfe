import { Box, BoxProps, styled } from "@mui/material";
import { keyframes } from "@mui/system";

const load = keyframes`
	 0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

export const PingingAnimation = styled(Box)({
  margin: "6px",
  display: "block",
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  background: "rgb(16 185 129)",
  boxShadow: "0 0 0 rgb(16 185 129)",
  animation: `${load} 2s infinite`,
});
