import React from "react";
import {
  Box,
  Button,
  Icons,
  SwitchIconButtonAnimation,
} from "nghiata-mfe-base-components";
import {
  useColorMode,
  useColorModeValue,
} from "nghiata-mfe-base-components/hooks";
import {
  IconMoonOutlined,
  IconSunFogOutlined,
} from "nghiata-mfe-base-components/icons";

export const ToggleColorButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = useColorModeValue(IconMoonOutlined, IconSunFogOutlined);
  const colorScheme = useColorModeValue("primary", "secondary");

  return (
    <>
      <SwitchIconButtonAnimation id={"colorMode"}>
        <Button
          onClick={toggleColorMode}
          aria-label="color-mode"
          color={colorScheme}
          sx={{
            maxHeight: "32px",
            minWidth: "32px",
            paddingX: "4px",
          }}
          {...props}
        >
          {
            <Icons
              Icon={icon}
              color={useColorModeValue("primary", "secondary")}
            />
          }
        </Button>
      </SwitchIconButtonAnimation>
    </>
  );
};

export default ToggleColorButton;
