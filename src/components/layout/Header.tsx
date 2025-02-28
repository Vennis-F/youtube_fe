import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        minWidth: "100vw",
        background: "linear-gradient(90deg, #0d47a1, #1976d2)",
        boxShadow: 3,
        transition: "box-shadow 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img
            src="/remitube_icon.webp"
            alt="Remitube Logo"
            width="32"
            height="32"
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}
          >
            RemiTube
          </Typography>
        </Box>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/register"
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            Register
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/users"
            sx={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            Users
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
