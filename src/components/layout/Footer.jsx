import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, School } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <School sx={{ fontSize: 30, mr: 1 }} />
              <Typography variant="h5" fontWeight="bold">
                uniGuia
              </Typography>
            </Box>
            <Typography variant="body2" paragraph>
              Ayudamos a estudiantes a encontrar su camino universitario ideal a través de recomendaciones personalizadas.
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton color="inherit" aria-label="facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="linkedin">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Inicio
            </Link>
            <Link component={RouterLink} to="/universidades" color="inherit" display="block" sx={{ mb: 1 }}>
              Universidades
            </Link>            
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" paragraph>
              ¿Tienes preguntas o sugerencias? Escríbenos y te responderemos a la brevedad.
            </Typography>
            <Typography variant="body2">
              Email: contacto@uniguia.com
            </Typography>
            <Typography variant="body2">
              Teléfono: +57 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', my: 3 }} />

        <Box textAlign="center">
          <Typography variant="body2">
            © {year} uniGuia - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
