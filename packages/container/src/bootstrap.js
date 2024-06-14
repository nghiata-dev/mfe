import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../i18n";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
