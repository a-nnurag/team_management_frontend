// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import "@radix-ui/themes/styles.css";
// import { Theme } from "@radix-ui/themes";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Theme>
//       <App />
//     </Theme>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react";

import "./index.css";
import App from "./App.jsx";
import QueryProvider from "./context/query-provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProvider>
      <NuqsAdapter>
        <App /> 
      </NuqsAdapter>
      <Toaster />
    </QueryProvider>
  </StrictMode>
);
