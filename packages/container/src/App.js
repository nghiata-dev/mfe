import React, { useState } from "react";
import { ColorModeProvider } from "nghiata-mfe-base-components/hooks";
import { RouterProvider } from "react-router-dom";
import router from "../../container/config/routes";

export default () => {
  return (
    <React.StrictMode>
      <ColorModeProvider defaultTheme="dark">
        <div>
          <RouterProvider router={router} />
        </div>
      </ColorModeProvider>
    </React.StrictMode>
  );
};
