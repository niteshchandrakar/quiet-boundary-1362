import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import AuthContextProvider from "./components/Pages/AuthContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>


<AuthContextProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
  </ChakraProvider>
  


);


