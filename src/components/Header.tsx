import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Work History", to: "/work" },
    { label: "Contact", to: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar sx={{ py: 0.5 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
              color: "text.primary",
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Davis Featherstone
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "text.primary" },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                slotProps={{
                  paper: {
                    sx: {
                      width: 280,
                      bgcolor: "rgba(10, 10, 15, 0.97)",
                      backdropFilter: "blur(16px)",
                      borderLeft: "1px solid rgba(63, 63, 70, 0.4)",
                    },
                  },
                }}
              >
                <Box role="presentation">
                  <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: "text.disabled" }}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List sx={{ px: 2 }}>
                    {navItems.map((item) => {
                      const isActive = location.pathname === item.to;
                      return (
                        <ListItem
                          key={item.label}
                          component={Link}
                          to={item.to}
                          onClick={handleDrawerToggle}
                          sx={{
                            color: isActive ? "text.primary" : "text.secondary",
                            textDecoration: "none",
                            borderRadius: 2,
                            mb: 0.5,
                            bgcolor: isActive
                              ? "rgba(255, 255, 255, 0.05)"
                              : "transparent",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "rgba(63, 63, 70, 0.3)",
                              color: "text.primary",
                            },
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{
                              "& .MuiTypography-root": {
                                fontWeight: isActive ? 600 : 400,
                                fontSize: "0.95rem",
                              },
                            }}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.to}
                    color="inherit"
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: "8px",
                      fontWeight: isActive ? 600 : 400,
                      fontSize: "0.875rem",
                      color: isActive ? "text.primary" : "text.disabled",
                      position: "relative",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        color: "text.primary",
                        backgroundColor: "rgba(63, 63, 70, 0.2)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: isActive
                          ? "translateX(-50%) scaleX(1)"
                          : "translateX(-50%) scaleX(0)",
                        width: "24px",
                        height: "2px",
                        backgroundColor: "text.primary",
                        borderRadius: "1px",
                        transition: "transform 0.2s ease",
                      },
                      "&:hover::after": {
                        transform: "translateX(-50%) scaleX(1)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default Header;
