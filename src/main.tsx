import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { VehiclesProvider } from "./context/VehiclesContext";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider resetCSS theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <VehiclesProvider>
          <App />
        </VehiclesProvider>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);
