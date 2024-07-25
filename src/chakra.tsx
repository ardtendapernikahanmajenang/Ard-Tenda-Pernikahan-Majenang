// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Playfair Display'`,
    body: `'Montserrat', sans-serif`,
  },
});

export default theme;
