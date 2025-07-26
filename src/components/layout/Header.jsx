import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // 👈 Importamos react-scroll
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { name: 'Inicio', type: 'scroll', to: 'inicio' },
    { name: 'Universidades', type: 'route', path: '/universidades' }
  ];

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecoration: 'none',
              letterSpacing: '.2rem',
              flexGrow: isMobile ? 0 : 1
            }}
          >
            uniGuia
          </Typography>

          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
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
                {/* Aquí podrías agregar navegación para móvil */}
              </Drawer>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', flexGrow: 0, gap: 2 }}>
                {navItems.map((item) =>
                  item.type === 'scroll' ? (
                    <ScrollLink
                      key={item.name}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: 'pointer', textDecoration: 'none' }}
                    >
                      <Button color="inherit">{item.name}</Button>
                    </ScrollLink>
                  ) : (
                    <Button
                      key={item.name}
                      component={RouterLink}
                      to={item.path}
                      color="inherit"
                    >
                      {item.name}
                    </Button>
                  )
                )}
              </Box>
              <Box sx={{ display: 'flex', ml: 2 }}>
                {/*  */}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
