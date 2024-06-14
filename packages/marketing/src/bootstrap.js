import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryHistory, createBrowserHistory } from "react-router-dom";
import App from "./App";
import "../i18n";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  // const history =
  //   defaultHistory ||
  //   createMemoryHistory({
  //     initialEntries: ["/about"],
  //   });

  // if (onNavigate) {
  //   history.listen(onNavigate);
  // }

  // ReactDOM.render(<App history={history} />, el);
  // ReactDOM.createRoot(<App />).render(el);
  ReactDOM.createRoot(el).render(<App />);
  // if (module.hot) {
  //   module.hot.accept('./App', () => {
  //     const NextApp = require('./App').default;
  //     render(NextApp);
  //   });
  // }

  // return {
  //   onParentNavigate({ pathname: nextPathname }) {
  //     const { pathname } = history.location;

  //     if (pathname !== nextPathname) {
  //       history.push(nextPathname);
  //     }
  //   },
  // };
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: () => {} });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
