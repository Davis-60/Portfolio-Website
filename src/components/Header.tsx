import React, { useState } from "react";
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
  alpha,
  ListItemButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

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
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: "none",
              color: "inherit",
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
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250, bgcolor: "background.paper" }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        key={item.label}
                        component={Link} // The ListItem itself is now the Link
                        to={item.to}
                        onClick={handleDrawerToggle} // Closes drawer on click
                        sx={{
                          color: "text.primary",
                          textDecoration: "none", // Removes underline from the link
                          bgcolor:
                            location.pathname === item.to
                              ? alpha(theme.palette.primary.main, 0.15)
                              : "transparent",
                          "&:hover": {
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                          },
                          // Ensure the text looks correct
                          fontWeight:
                            location.pathname === item.to ? "bold" : "normal",
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          sx={{
                            // Applies the bold weight to the internal span
                            "& .MuiTypography-root": {
                              fontWeight:
                                location.pathname === item.to
                                  ? "bold"
                                  : "normal",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.to}
                  color="inherit"
                  sx={{
                    mx: 1,
                    px: 2,
                    py: 1,
                    borderRadius: "4px",
                    fontWeight: "medium",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.2s ease",
                    backgroundColor:
                      location.pathname === item.to
                        ? alpha(theme.palette.primary.main, 0.15)
                        : "transparent",
                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    },
                    "&::after":
                      location.pathname === item.to
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "2px",
                            backgroundColor: theme.palette.primary.main,
                          }
                        : {},
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />{" "}
      {/* Placeholder to prevent content from hiding behind AppBar */}
    </Box>
  );
};

export default Header;
