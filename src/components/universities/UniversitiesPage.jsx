import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fab,
  useMediaQuery,
  Paper,
  InputAdornment,
  Link
} from '@mui/material';
import {
  FilterList,
  Close,
  Add,
  Search,
  LocationOn,
  School,
  Dns,
  AttachMoney,
  Language,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Datos de ejemplo para las universidades
const mockUniversities = [
  {
    id: 1,
    name: 'Universidad Nacional',
    logo: 'https://via.placeholder.com/150',
    description: 'Una de las instituciones educativas más prestigiosas del país, con una amplia oferta académica y reconocimiento internacional.',
    location: 'Bogotá',
    rating: 4.8,
    programs: ['Ingeniería de Sistemas', 'Medicina', 'Derecho', 'Economía'],
    tuitionRange: '$1,000,000 - $3,000,000',
    website: 'www.universidad-nacional.edu',
    modality: ['Presencial', 'Virtual']
  },
  {
    id: 2,
    name: 'Universidad de los Andes',
    logo: 'https://via.placeholder.com/150',
    description: 'Universidad privada reconocida por su excelencia académica y enfoque en investigación. Ofrece programas de pregrado y posgrado de alta calidad.',
    location: 'Bogotá',
    rating: 4.7,
    programs: ['Administración de Empresas', 'Ingeniería Civil', 'Psicología', 'Arquitectura'],
    tuitionRange: '$8,000,000 - $15,000,000',
    website: 'www.uniandes.edu',
    modality: ['Presencial']
  },
  {
    id: 3,
    name: 'Universidad Javeriana',
    logo: 'https://via.placeholder.com/150',
    description: 'Universidad privada con tradición jesuita, enfocada en la formación integral. Destaca por sus programas en ciencias sociales y de la salud.',
    location: 'Bogotá',
    rating: 4.6,
    programs: ['Comunicación Social', 'Medicina', 'Filosofía', 'Ingeniería Industrial'],
    tuitionRange: '$7,000,000 - $13,000,000',
    website: 'www.javeriana.edu',
    modality: ['Presencial', 'Semipresencial']
  },
  {
    id: 4,
    name: 'Universidad del Rosario',
    logo: 'https://via.placeholder.com/150',
    description: 'Universidad tradicional con más de tres siglos de historia, reconocida por sus facultades de derecho y medicina.',
    location: 'Bogotá',
    rating: 4.5,
    programs: ['Derecho', 'Relaciones Internacionales', 'Medicina', 'Administración'],
    tuitionRange: '$7,500,000 - $14,000,000',
    website: 'www.urosario.edu',
    modality: ['Presencial']
  },
  {
    id: 5,
    name: 'Universidad EAFIT',
    logo: 'https://via.placeholder.com/150',
    description: 'Universidad privada reconocida por sus programas en negocios, ingeniería y diseño. Cuenta con un moderno campus y proyección internacional.',
    location: 'Medellín',
    rating: 4.6,
    programs: ['Negocios Internacionales', 'Ingeniería de Sistemas', 'Diseño', 'Finanzas'],
    tuitionRange: '$7,000,000 - $12,000,000',
    website: 'www.eafit.edu',
    modality: ['Presencial', 'Virtual']
  },
  {
    id: 6,
    name: 'Universidad del Valle',
    logo: 'https://via.placeholder.com/150',
    description: 'Universidad pública reconocida por su excelencia académica y contribuciones a la investigación científica y cultural.',
    location: 'Cali',
    rating: 4.5,
    programs: ['Biología', 'Ingeniería Eléctrica', 'Literatura', 'Música'],
    tuitionRange: '$800,000 - $2,500,000',
    website: 'www.univalle.edu',
    modality: ['Presencial']
  }
];

// Lista de ciudades para el filtro
const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga'];

// Lista de áreas de estudio para el filtro
const studyAreas = [
  'Ingeniería',
  'Medicina y Ciencias de la Salud',
  'Derecho',
  'Economía y Negocios',
  'Ciencias Sociales',
  'Artes y Humanidades',
  'Ciencias Naturales',
  'Educación'
];

// Componente para el formulario de añadir nueva carrera
const AddProgramForm = ({ open, handleClose }) => {
  const [universityName, setUniversityName] = useState('');
  const [programName, setProgramName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [modalities, setModalities] = useState([]);
  const [tuition, setTuition] = useState('');
  const [studyArea, setStudyArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar el programa (que en este caso solo es maquetado)
    console.log({
      universityName,
      programName,
      location,
      description,
      modalities,
      tuition,
      studyArea
    });
    handleClose();
  };

  const modalityOptions = ['Presencial', 'Virtual', 'Semipresencial', 'A distancia'];

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Añadir nueva carrera universitaria</Typography>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Universidad"
                variant="outlined"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
                required
                helperText="Nombre de la universidad que ofrece el programa"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nombre del programa"
                variant="outlined"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
                required
                helperText="Nombre completo de la carrera"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="location-label">Ciudad</InputLabel>
                <Select
                  labelId="location-label"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  label="Ciudad"
                >
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>{city}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="study-area-label">Área de estudio</InputLabel>
                <Select
                  labelId="study-area-label"
                  value={studyArea}
                  onChange={(e) => setStudyArea(e.target.value)}
                  label="Área de estudio"
                >
                  {studyAreas.map((area) => (
                    <MenuItem key={area} value={area}>{area}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="modality-label">Modalidad</InputLabel>
                <Select
                  labelId="modality-label"
                  multiple
                  value={modalities}
                  onChange={(e) => setModalities(e.target.value)}
                  label="Modalidad"
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {modalityOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Matrícula aproximada"
                variant="outlined"
                value={tuition}
                onChange={(e) => setTuition(e.target.value)}
                required
                helperText="Rango de costo por semestre"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                multiline
                rows={4}
                helperText="Información relevante sobre el programa"
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          color="primary"
        >
          Guardar programa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Componente principal de la página de universidades
const UniversitiesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Estados para los filtros
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedModality, setSelectedModality] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [, setTuitionRange] = useState([0, 15000000]);
  const [showAddProgram, setShowAddProgram] = useState(false);
  
  // Estado para las tarjetas expandidas
  const [expandedCards, setExpandedCards] = useState({});

  // Filtrar universidades según los criterios
  const filteredUniversities = mockUniversities.filter((university) => {
    const matchesCity = !selectedCity || university.location === selectedCity;
    const matchesModality = !selectedModality || university.modality.includes(selectedModality);
    const matchesSearch = !searchQuery || 
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.programs.some(prog => prog.toLowerCase().includes(searchQuery.toLowerCase()));
    // Para el área de estudio sería necesario más datos, en este mock usamos una lógica simplificada
    const matchesArea = !selectedArea || university.programs.some(prog => prog.includes(selectedArea.split(' ')[0]));
    
    return matchesCity && matchesModality && matchesSearch && matchesArea;
  });

  const handleToggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleFilterDrawer = () => {
    setFilterDrawerOpen(!filterDrawerOpen);
  };

  const resetFilters = () => {
    setSelectedCity('');
    setSelectedArea('');
    setSelectedModality('');
    setTuitionRange([0, 15000000]);
  };

  const handleAddProgramClose = () => {
    setShowAddProgram(false);
  };

  // Contenido del drawer de filtros
  const filterDrawer = (
    <Box sx={{ width: isMobile ? '100vw' : 320, p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" component="h2">Filtros</Typography>
        <IconButton edge="end" onClick={toggleFilterDrawer}>
          <Close />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 3 }} />
      
      <Box mb={3}>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Ubicación
        </Typography>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>Ciudad</InputLabel>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            label="Ciudad"
          >
            <MenuItem value="">Todas las ciudades</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>{city}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Box mb={3}>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Área de estudio
        </Typography>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>Área</InputLabel>
          <Select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            label="Área"
          >
            <MenuItem value="">Todas las áreas</MenuItem>
            {studyAreas.map((area) => (
              <MenuItem key={area} value={area}>{area}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Box mb={3}>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold">
          Modalidad
        </Typography>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel>Modalidad</InputLabel>
          <Select
            value={selectedModality}
            onChange={(e) => setSelectedModality(e.target.value)}
            label="Modalidad"
          >
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Presencial">Presencial</MenuItem>
            <MenuItem value="Virtual">Virtual</MenuItem>
            <MenuItem value="Semipresencial">Semipresencial</MenuItem>
            <MenuItem value="A distancia">A distancia</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Box mt={4}>
        <Button 
          variant="outlined" 
          color="primary" 
          fullWidth
          onClick={resetFilters}
        >
          Limpiar filtros
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2 }}
          onClick={toggleFilterDrawer}
        >
          Aplicar filtros
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box component="main" sx={{ minHeight: '100vh', pb: 10 }}>
      {/* Banner principal */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          py: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Explora universidades y programas
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 800 }}>
            Descubre la oferta académica de universidades y encuentra el programa que mejor se adapte a tus intereses y objetivos profesionales.
          </Typography>
        </Container>
      </Box>

      {/* Sección de búsqueda y filtros */}
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                placeholder="Busca universidades o programas..."
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                startIcon={<FilterList />}
                onClick={toggleFilterDrawer}
              >
                Filtrar resultados
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Resultados de la búsqueda */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h5" component="h2">
            {filteredUniversities.length} {filteredUniversities.length === 1 ? 'universidad encontrada' : 'universidades encontradas'}
          </Typography>
          {selectedCity || selectedArea || selectedModality ? (
            <Button color="primary" onClick={resetFilters}>
              Limpiar filtros
            </Button>
          ) : null}
        </Box>

        {/* Lista de universidades */}
        {filteredUniversities.length > 0 ? (
          <Grid container spacing={4}>
            {filteredUniversities.map((university) => (
              <Grid item xs={12} key={university.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card>
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={3} md={2}>
                          <CardMedia
                            component="img"
                            image={university.logo}
                            alt={university.name}
                            sx={{ 
                              borderRadius: 1,
                              objectFit: 'contain',
                              height: 100,
                              width: '100%',
                              mb: { xs: 2, sm: 0 }
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={9} md={10}>
                          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                            <Box>
                              <Typography variant="h5" component="h3" gutterBottom>
                                {university.name}
                              </Typography>
                              <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <LocationOn fontSize="small" color="action" />
                                <Typography variant="body2" color="text.secondary">
                                  {university.location}
                                </Typography>
                              </Box>
                              <Box display="flex" alignItems="center" gap={1}>
                                <Rating
                                  value={university.rating}
                                  precision={0.1}
                                  readOnly
                                  size="small"
                                />
                                <Typography variant="body2" color="text.secondary">
                                  {university.rating}
                                </Typography>
                              </Box>
                            </Box>
                            <Button
                              endIcon={expandedCards[university.id] ? <ExpandLess /> : <ExpandMore />}
                              onClick={() => handleToggleCard(university.id)}
                            >
                              {expandedCards[university.id] ? 'Ver menos' : 'Ver más'}
                            </Button>
                          </Box>

                          <Box mt={1}>
                            <Typography variant="body1" paragraph>
                              {expandedCards[university.id] ? 
                                university.description : 
                                `${university.description.substring(0, 120)}${university.description.length > 120 ? '...' : ''}`
                              }
                            </Typography>
                          </Box>

                          {expandedCards[university.id] && (
                            <Box mt={2}>
                              <Divider sx={{ mb: 2 }} />
                              <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                  <Box display="flex" alignItems="flex-start" gap={1}>
                                    <School fontSize="small" color="primary" />
                                    <Box>
                                      <Typography variant="subtitle2" fontWeight="bold">
                                        Programas destacados
                                      </Typography>
                                      <Box display="flex" gap={0.5} flexWrap="wrap" mt={0.5}>
                                        {university.programs.map((program) => (
                                          <Chip 
                                            key={program} 
                                            label={program} 
                                            size="small" 
                                            sx={{ mb: 0.5 }} 
                                          />
                                        ))}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <AttachMoney fontSize="small" color="primary" />
                                    <Box>
                                      <Typography variant="subtitle2" fontWeight="bold">
                                        Rango de matrícula
                                      </Typography>
                                      <Typography variant="body2">
                                        {university.tuitionRange} COP por semestre
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Dns fontSize="small" color="primary" />
                                    <Box>
                                      <Typography variant="subtitle2" fontWeight="bold">
                                        Modalidades
                                      </Typography>
                                      <Typography variant="body2">
                                        {university.modality.join(', ')}
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box display="flex" alignItems="center" gap={1}>
                                    <Language fontSize="small" color="primary" />
                                    <Box>
                                      <Typography variant="subtitle2" fontWeight="bold">
                                        Sitio web
                                      </Typography>
                                      <Link href={`https://${university.website}`} target="_blank" rel="noopener noreferrer">
                                        <Typography variant="body2">
                                          {university.website}
                                        </Typography>
                                      </Link>
                                    </Box>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Box>
                          )}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box textAlign="center" py={6}>
            <Typography variant="h6" color="text.secondary">
              No se encontraron universidades que coincidan con los criterios seleccionados.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              onClick={resetFilters}
            >
              Limpiar filtros
            </Button>
          </Box>
        )}
      </Container>

      {/* Drawer para filtros en móvil */}
      <Drawer
        anchor={isMobile ? 'bottom' : 'right'}
        open={filterDrawerOpen}
        onClose={toggleFilterDrawer}
        PaperProps={{
          sx: {
            borderRadius: isMobile ? '16px 16px 0 0' : 0,
            maxHeight: isMobile ? '80vh' : '100%'
          }
        }}
      >
        {filterDrawer}
      </Drawer>

      {/* Botón flotante para añadir programa */}
      <Fab
        color="secondary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24
        }}
        onClick={() => setShowAddProgram(true)}
      >
        <Add />
      </Fab>

      {/* Modal para añadir programa */}
      <AddProgramForm 
        open={showAddProgram} 
        handleClose={handleAddProgramClose} 
      />
    </Box>
  );
};

export default UniversitiesPage;
