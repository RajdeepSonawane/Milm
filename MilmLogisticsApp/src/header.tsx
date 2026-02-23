import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Button,
  Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* TOP BAR */}
      <AppBar position="fixed" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {/* LOGO */}
          <Typography component={RouterLink} to="/" sx={styles.logo}>
            MILM
          </Typography>

          {/* DESKTOP MENU */}
          <Stack direction="row" spacing={4} sx={styles.desktopMenu}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                sx={{
                  ...styles.navButton,
                  ...(isActive(link.path) && styles.activeNav)
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* MOBILE MENU BUTTON */}
          <IconButton onClick={() => setOpen(true)} sx={styles.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={styles.drawerBox}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Stack spacing={3} mt={2}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                onClick={() => setOpen(false)}
                sx={{
                  ...styles.drawerLink,
                  ...(isActive(link.path) && styles.activeDrawerLink)
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>

      {/* spacing so content not hidden behind fixed header */}
      <Toolbar />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  appBar: {
  bgcolor: "#1565c0",
  borderBottom: "1px solid rgba(0,0,0,0.1)",
  py: 1.5, // adds vertical padding
},

  toolbar: {
  justifyContent: "space-between",
  minHeight: "100px !important", // 👈 increase height
},

  logo: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: 700,
    fontSize: 26,
    letterSpacing: 1
  },

  desktopMenu: {
    display: { xs: "none", md: "flex" }
  },

  navButton: {
    color: "rgba(255,255,255,0.85)",
    fontWeight: 500,
    fontSize: 16,
    "&:hover": {
      color: "#fff",
      backgroundColor: "transparent"
    }
  },

  activeNav: {
    color: "#fff",
    borderBottom: "2px solid #fff",
    borderRadius: 0
  },

  menuButton: {
    display: { md: "none" },
    color: "#fff"
  },

  drawerBox: {
    width: 260,
    p: 3
  },

  drawerLink: {
    justifyContent: "flex-start",
    fontSize: 18,
    color: "#333"
  },

  activeDrawerLink: {
    color: "#1565c0",
    fontWeight: 600
  }
};