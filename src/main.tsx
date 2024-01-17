import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Theme
      appearance="dark"
      accentColor="gray"
      grayColor="slate"
      radius="large"
      scaling="95%"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
