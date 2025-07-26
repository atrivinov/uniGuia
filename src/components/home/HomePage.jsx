
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button, 
  Avatar, 
  Divider
} from '@mui/material';
import { School, Search, FilterList, EmojiPeople } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';



const HomePage = () => {
  const theme = useTheme();
  //const [authTab, setAuthTab] = useState(0);

  const developers = [
    {
      name: 'Alexandra Triviño Vasquez',
      role: 'Frontend Developer',
      bio: 'Desarrolladora frontend apasionada por crear experiencias de usuario intuitivas y atractivas. Especialista en React y tecnologías modernas para aplicaciones web.',
      avatar: 'A'
    },
    {
      name: 'Juan Pablo de la Ossa',
      role: 'Data Engineer',
      bio: 'Ingeniero de software con amplia experiencia en desarrollo backend. Especialista en arquitecturas escalables y bases de datos. Amante del código limpio y bien estructurado.',
      avatar: 'C'
    },
    {
      name: 'Mariana Areiza',
      role: 'Estudiante de Desarrollo de Software',
      bio: 'Estudiante de desarrollo de software con un enfoque en el aprendizaje continuo y la mejora de habilidades. Apasionada por la programación y el desarrollo de aplicaciones web.',
      avatar: 'M'
    },
  ];

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
      <Box id="inicio" sx={{ bgcolor: theme.palette.primary.main, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            position: 'relative',
            height: { xs: '300px', md: '400px' },
            px: 2,
            py: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.4,
              zIndex: 1
            },
            zIndex: 2
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                  <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                    Encuentra tu camino universitario ideal
                  </Typography>
                  <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                    uniGuia te ayuda a descubrir programas universitarios que se ajustan perfectamente a tus intereses, habilidades y objetivos profesionales.
                  </Typography>
                  <Button component={RouterLink} to="/universidades" variant="contained" size="large" color="secondary" sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}>
                    Explorar Universidades
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ my: 10 }} id="ayuda">
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            ¿Cómo te ayuda uniGuia?
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="800px" mx="auto">
            Nuestra plataforma está diseñada para facilitar tu búsqueda de la carrera y universidad ideal, con herramientas que te ahorrarán tiempo y esfuerzo.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 3 }} elevation={1}>
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

      <Box sx={{ bgcolor: 'background.default', py: 6 }} id="nosotros">
        <Container maxWidth="lg">
          <Box textAlign="center" mb={4}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              Nuestro Equipo
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="600px" mx="auto">
              Conoce a los desarrolladores detrás de uniGuia, comprometidos con ayudar a estudiantes a encontrar su camino académico ideal.
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            {developers.map((developer, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                  <Card sx={{ height: '100%' }} elevation={2}>
                    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 70, height: 70, fontSize: '1.5rem', mb: 1.5 }}>
                        {developer.avatar}
                      </Avatar>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {developer.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {developer.role}
                      </Typography>
                      <Divider sx={{ width: '40%', my: 1.5 }} />
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

      <Box id="contacto" sx={{ bgcolor: theme.palette.secondary.main, color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            Encuentra tu carrera ideal hoy mismo
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Miles de estudiantes ya han encontrado su camino universitario con uniGuia.
          </Typography>
          <Button component={RouterLink} to="/universidades" variant="contained" size="large" color="primary" sx={{ bgcolor: 'white', color: theme.palette.secondary.main, px: 4, py: 1.5 }}>
            Explorar Universidades
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

