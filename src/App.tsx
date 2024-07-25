// src/App.tsx
// src/App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Theme from "./chakra";

const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Tambahkan rute lain sesuai kebutuhan */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

