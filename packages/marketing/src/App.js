// import React from "react";
// // import { Switch, Route, Router } from 'react-router-dom';
// // import {
// //   StylesProvider,
// //   createGenerateClassName,
// // } from '@material-ui/core/styles';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Landing from "./components/Landing";
// import Pricing from "./components/Pricing";

// // const generateClassName = createGenerateClassName({
// //   productionPrefix: "ma",
// // });

// export default ({ history }) => {
//   return (
//     <div>
//       {/* <StylesProvider generateClassName={generateClassName}> */}
//       <Router history={history}>
//         <Routes>
//           <Route path="/about" element={<Pricing />} />
//         </Routes>
//       </Router>
//       {/* </StylesProvider> */}
//     </div>
//   );
// };
import React, { lazy, Suspense, useState } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ColorModeProvider } from "nghiata-mfe-base-components/hooks";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "../../marketing/config/routes";
import { lightTheme, darkTheme } from "nghiata-mfe-base-components/styles";
// import { Box } from "nghiata-mfe-base-components";
// import Progress from "./components/Progress";
// import Header from "./components/Header";
import { ThemeProvider } from "@emotion/react";
import { useEffect } from "react";
import { subscribe, unsubscribe } from "../config/events";
// import { I18nextProvider } from "react-i18next";
// import i18n from "../i18n";

// const MarketingLazy = lazy(() => import("./components/MarketingApp"));
// const AuthLazy = lazy(() => import("./components/AuthApp"));

// const generateClassName = createGenerateClassName({
//   productionPrefix: "co",
// });

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [colorMode, setColorMode] = useState("dark");
  // const { ColorModeProvider } = useColorMode();
  useEffect(() => {
    subscribe("onChangeColorMode", (event) =>
      console.log("setIsOpen(true)", setColorMode(event.detail.colorMode))
    );
    return () => {
      unsubscribe("onChangeColorMode", () => console.log("setIsOpen(true)"));
    };
  }, []);
  return (
    <React.StrictMode>
      {/* <I18nextProvider i18n={i18n}> */}
      {/* <ColorModeProvider defaultTheme="light"> */}
      <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
        {/* <CssBaseline /> */}
        {/* <BrowserRouter> */}
        {/* <StylesProvider generateClassName={generateClassName}> */}
        <div>
          {/* <Header
            // onSignOut={() => setIsSignedIn(false)}
            // isSignedIn={isSignedIn}
            /> */}
          {/* <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense> */}
          <RouterProvider router={router} />
        </div>
        {/* </StylesProvider> */}
        {/* </BrowserRouter> */}
      </ThemeProvider>
      {/* </ColorModeProvider> */}
      {/* </I18nextProvider> */}
    </React.StrictMode>
  );
};
