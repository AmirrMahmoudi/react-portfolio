import "@fontsource/inter";
import "@fontsource/poppins";
import "@/locales/i18n-config";

import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "@/styles/theme.js";
import { FirebaseApp } from "./utils/firebase";

FirebaseApp.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={myTheme}>
    <App />
  </ChakraProvider>
);
