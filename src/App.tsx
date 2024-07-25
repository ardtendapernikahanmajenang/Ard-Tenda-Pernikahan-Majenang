// src/App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Theme from "./chakra";
const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;

