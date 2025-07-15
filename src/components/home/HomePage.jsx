import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button, 
  TextField, 
  Tab, 
  Tabs, 
  Paper, 
  Avatar, 
  Divider
} from '@mui/material';
import { School, Search, FilterList, EmojiPeople } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Componente de formulario de inicio de sesión
const LoginForm = () => {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Correo electrónico"
        variant="outlined"
        margin="normal"
        required
        id="email-login"
        name="email"
        autoComplete="email"
      />
      <TextField
        fullWidth
        label="Contraseña"
        variant="outlined"
        margin="normal"
        required
        id="password-login"
        name="password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
      >
        Iniciar Sesión
      </Button>
      <Typography variant="body2" align="center">
        ¿Olvidaste tu contraseña?
      </Typography>
    </Box>
  );
};

// Componente de formulario de registro
const RegisterForm = () => {
  return (
    <Box component="form" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            required
            id="firstName"
            name="firstName"
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Apellido"
            variant="outlined"
            required
            id="lastName"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        label="Correo electrónico"
        variant="outlined"
        margin="normal"
        required
        id="email-register"
        name="email"
        autoComplete="email"
      />
      <TextField
        fullWidth
        label="Contraseña"
        variant="outlined"
        margin="normal"
        required
        id="password-register"
        name="password"
        type="password"
        autoComplete="new-password"
      />
      <TextField
        fullWidth
        label="Confirmar contraseña"
        variant="outlined"
        margin="normal"
        required
        id="confirmPassword"
        name="confirmPassword"
        type="password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 2 }}
      >
        Registrarse
      </Button>
    </Box>
  );
};

// Componente principal de la página de inicio
const HomePage = () => {
  const theme = useTheme();
  // isMobile se utiliza en los breakpoints responsivos de los componentes
  const [authTab, setAuthTab] = useState(0);

  const handleAuthTabChange = (event, newValue) => {
    setAuthTab(newValue);
  };

  // Datos de los desarrolladores (ficticios)
  const developers = [
    {
      name: 'Ana Martínez',
      role: 'Frontend Developer',
      bio: 'Desarrolladora frontend apasionada por crear experiencias de usuario intuitivas y atractivas. Especialista en React y tecnologías modernas para aplicaciones web.',
      avatar: 'A'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Backend Developer',
      bio: 'Ingeniero de software con amplia experiencia en desarrollo backend. Especialista en arquitecturas escalables y bases de datos. Amante del código limpio y bien estructurado.',
      avatar: 'C'
    },
    {
      name: 'Sofía Gómez',
      role: 'UI/UX Designer',
      bio: 'Diseñadora de interfaces centradas en el usuario, con experiencia en investigación de usuarios y prototipado. Busca crear soluciones que sean tanto funcionales como estéticamente agradables.',
      avatar: 'S'
    }
  ];

  // Características de la aplicación
  const features = [
    {
      icon: <Search sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Búsqueda Inteligente',
      description: 'Encuentra programas universitarios que se adapten a tus intereses y necesidades específicas.'
    },
    {
      icon: <FilterList sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Filtros Personalizados',
      description: 'Filtra los resultados según ubicación, costo, duración, modalidad y más para encontrar la opción perfecta.'
    },
    {
      icon: <School sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Información Completa',
      description: 'Accede a información detallada sobre cada universidad y programa, incluyendo planes de estudio y requisitos.'
    },
    {
      icon: <EmojiPeople sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Recomendaciones Personalizadas',
      description: 'Recibe sugerencias adaptadas a tu perfil académico, intereses y objetivos profesionales.'
    }
  ];

  return (
    <Box component="main">
      {/* Banner principal */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography 
                  variant="h2" 
                  component="h1"
                  fontWeight="bold"
                  gutterBottom
                >
                  Encuentra tu camino universitario ideal
                </Typography>
                <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                  uniGuia te ayuda a descubrir programas universitarios que se ajustan perfectamente a tus intereses, habilidades y objetivos profesionales.
                </Typography>
                <Button 
                  component={RouterLink}
                  to="/universidades"
                  variant="contained" 
                  size="large" 
                  color="secondary"
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                >
                  Explorar Universidades
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ bgcolor: 'rgba(255, 255, 255, 0.9)', color: theme.palette.primary.main }}
                  component="a"
                  href="#auth-section"
                >
                  Crear Cuenta
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Estudiantes universitarios"
                  sx={{
                    width: '100%',
                    borderRadius: 4,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    display: { xs: 'none', sm: 'block' }
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Sección de características */}
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            ¿Cómo te ayuda uniGuia?
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="800px" mx="auto">
            Nuestra plataforma está diseñada para facilitar tu búsqueda de la carrera y universidad ideal, con herramientas que te ahorrarán tiempo y esfuerzo.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    p: 3
                  }}
                  elevation={1}
                >
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="500">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección sobre nosotros - Equipo de desarrollo */}
      <Box sx={{ bgcolor: 'background.default', py: 10 }} id="nosotros">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
              Nuestro Equipo
            </Typography>
            <Typography variant="h6" color="text.secondary" maxWidth="800px" mx="auto">
              Conoce a los desarrolladores detrás de uniGuia, comprometidos con ayudar a estudiantes a encontrar su camino académico ideal.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {developers.map((developer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }} elevation={2}>
                    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: theme.palette.primary.main, 
                          width: 100, 
                          height: 100,
                          fontSize: '2.5rem',
                          mb: 2
                        }}
                      >
                        {developer.avatar}
                      </Avatar>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {developer.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {developer.role}
                      </Typography>
                      <Divider sx={{ width: '50%', my: 2 }} />
                      <Typography variant="body1">
                        {developer.bio}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Sección de autenticación - Login y Registro */}
      <Container maxWidth="md" sx={{ my: 10 }} id="auth-section">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            Únete a uniGuia
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="800px" mx="auto">
            Crea una cuenta para guardar tus universidades favoritas y recibir recomendaciones personalizadas.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box>
            <Tabs 
              value={authTab} 
              onChange={handleAuthTabChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              aria-label="auth tabs"
            >
              <Tab label="Iniciar Sesión" id="login" />
              <Tab label="Registrarse" id="registro" />
            </Tabs>
          </Box>
          <Box sx={{ p: 3 }}>
            {authTab === 0 && (
              <LoginForm />
            )}
            {authTab === 1 && (
              <RegisterForm />
            )}
          </Box>
        </Paper>
      </Container>

      {/* Sección CTA */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.secondary.main,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            Encuentra tu carrera ideal hoy mismo
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Miles de estudiantes ya han encontrado su camino universitario con uniGuia.
          </Typography>
          <Button 
            component={RouterLink}
            to="/universidades"
            variant="contained" 
            size="large" 
            color="primary"
            sx={{ bgcolor: 'white', color: theme.palette.secondary.main, px: 4, py: 1.5 }}
          >
            Explorar Universidades
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
