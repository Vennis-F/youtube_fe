import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        background: "linear-gradient(90deg, #0d47a1, #1976d2)", // Màu gradient đẹp
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
      >
        {"© "}
        {new Date().getFullYear()} RemiTube. All rights reserved.
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link
          href="#"
          color="inherit"
          sx={{ mx: 1, fontWeight: "bold", fontSize: "0.9rem" }}
        >
          Privacy Policy
        </Link>
        <Link
          href="#"
          color="inherit"
          sx={{ mx: 1, fontWeight: "bold", fontSize: "0.9rem" }}
        >
          Terms of Use
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
