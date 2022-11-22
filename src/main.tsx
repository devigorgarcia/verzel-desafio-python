import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import { VehiclesProvider } from "./context/VehiclesContext";
import { theme } from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider resetCSS theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <VehiclesProvider>
            <App />
          </VehiclesProvider>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);
