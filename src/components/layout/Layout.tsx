import React from "react";
import { Container, Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Container component="main" sx={{ mt: 2, mb: 2, flexGrow: 1 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
