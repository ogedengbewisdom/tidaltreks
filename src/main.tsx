import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// const breakpoints = {
//   base: "0px",
//   sm: "320px",
//   md: "768px",
//   lg: "960px",
//   xl: "1200px",
//   "2xl": "1536px",
//   "3xl": "1636px",
// };

const theme = extendTheme({
  // breakpoints,
  fonts: {
    body: `"Montserrat", Arial, sans-serif`,
    heading: `"Montserrat", Arial, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
