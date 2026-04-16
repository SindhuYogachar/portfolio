import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

/* ✅ UPDATED ORDER */
const navItems = [
  ['Professional Overview', 'technical-summary'],
  [' History', 'history'],
  ['Expertise', 'expertise'],
  ['Career Highlights', 'highlights'],
  ['Contact', 'contact']
];

function Navigation({ parentToChild, modeChange }: any) {

  const { mode } = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /* 🔥 Scroll detection */
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* 🔥 Smooth scroll */
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with id "${section}" not found`);
    }
  };

  /* 📱 Mobile drawer */
  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* 🔝 NAVBAR */}
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
      >
        <Toolbar className="navigation-bar">

          {/* 📱 MENU BUTTON */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* 🌙 DARK/LIGHT TOGGLE */}
          {mode === 'dark' ? (
            <LightModeIcon onClick={modeChange} />
          ) : (
            <DarkModeIcon onClick={modeChange} />
          )}

          {/* 💻 DESKTOP MENU */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{ color: '#fff' }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      {/* 📱 DRAWER */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;