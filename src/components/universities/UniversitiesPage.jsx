import React, { useState, useEffect } from 'react';
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
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { fetchUniversities } from '../../api/universities';

const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga'];

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
  const [modality, setModality] = useState('');

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
            </Grid >
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="location-label"shrink >Ciudad </InputLabel>
                <Select
                  labelId="location-label"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  label="Ciudad"
                  displayEmpty
                  renderValue={(selected) =>
                      selected ? selected : <em style={{ color: '#888' }}>Selecciona una ciudad</em>
                    }
                  sx={{ minHeight: 56 }}
                >
                  <MenuItem value="" disabled>Selecciona una ciudad</MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>{city}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="study-area-label" shrink >Área de estudio</InputLabel>
                <Select
                  labelId="study-area-label"
                  value={studyArea}
                  onChange={(e) => setStudyArea(e.target.value)}
                  label="Área de estudio"
                  displayEmpty
                  sx={{ minHeight: 56 }}
                  renderValue={(selected) =>
                    selected ? selected : <em style={{ color: '#888' }}>Selecciona un área</em>
                  }
                >
                  {studyAreas.map((area) => (
                    <MenuItem key={area} value={area}>{area}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
                <FormControl fullWidth required variant="outlined">
                  <InputLabel id="modality-label" shrink > Modalidad</InputLabel>
                  <Select
                    labelId="modality-label"
                    id="modality-select"
                    value={modality}
                    onChange={(e) => setModality(e.target.value)}
                    label="Modalidad"
                    displayEmpty
                    renderValue={(selected) =>
                      selected ? selected : <em style={{ color: '#888' }}>Selecciona una modalidad</em>
                    }
                    sx={{
                      minHeight: 56,
                      '& .MuiSelect-select:focus': {
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>Selecciona una modalidad</em>
                    </MenuItem>
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
  // Estado para modal de detalle
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const handleOpenDetail = (university) => setSelectedUniversity(university);
  const handleCloseDetail = () => setSelectedUniversity(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Estado para universidades obtenidas por fetch
  const [universities, setUniversities] = useState([]);
  useEffect(() => {
    fetchUniversities()
      .then(data => {
        console.log('Universidades',data)
        setUniversities(data)
      })
      .catch(() => setUniversities([]));
  }, []);

  // Estados para los filtros
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedModality, setSelectedModality] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [, setTuitionRange] = useState([0, 15000000]);
  const [showAddProgram, setShowAddProgram] = useState(false);

  // Filtrar universidades según los criterios
  const filteredUniversities = universities.filter((university) => {
    const matchesCity = !selectedCity || university.location === selectedCity;
    const matchesModality = !selectedModality || university.modality?.includes(selectedModality);
    const matchesSearch = !searchQuery || 
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (university.programs && university.programs.some(prog => prog.toLowerCase().includes(searchQuery.toLowerCase())));
    // Para el área de estudio sería necesario más datos, en este mock usamos una lógica simplificada
    const matchesArea = !selectedArea || (university.programs && university.programs.some(prog => prog.includes(selectedArea.split(' ')[0])));
    
    return matchesCity && matchesModality && matchesSearch && matchesArea;
  });

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
          <Grid container spacing={4} justifyContent="center">
            {filteredUniversities.map((university) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={university.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card sx={{ minWidth: 280, maxWidth: 320, width: '100%', height: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 3 }}>
                    <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0, height: '100%' }}>
                      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                        <Box sx={{ pt: 2, pb: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
                          <CardMedia
                            component="img"
                            image={university.logo}
                            alt={university.name}
                            sx={{ borderRadius: 1, objectFit: 'contain', height: 70, width: 90, background: '#f5f5f5', boxShadow: 1 }}
                          />
                        </Box>
                        <Typography variant="h6" component="h3" gutterBottom align="center" sx={{ mt: 1 }}>
                          {university.name}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1} justifyContent="center" sx={{ mb: 2 }}>
                          <Rating value={university.rating} precision={0.1} readOnly size="small" />
                          <Typography variant="body2" color="text.secondary">
                            {university.rating}
                          </Typography>
                        </Box>
                        <Button variant="outlined" size="small" sx={{ mt: 'auto', mb: 2 }} onClick={() => handleOpenDetail(university)}>
                          Ver más
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
  {/* Modal de detalle de universidad */}
  {/* Overlay claro y opaco sobre la página cuando la modal está abierta */}
  {selectedUniversity && (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(255,255,255,0.6)',
        zIndex: 1200
      }}
    />
  )}
  {selectedUniversity && (
    <Dialog 
      open={!!selectedUniversity} 
      onClose={handleCloseDetail} 
      fullWidth 
      maxWidth="md"
      hideBackdrop={true}
      sx={{ boxShadow: 'none' }}
      slotProps={{ paper: { sx: { boxShadow: 'none', background: 'white' } } }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{selectedUniversity.name}</Typography>
          <IconButton edge="end" color="inherit" onClick={handleCloseDetail} aria-label="close">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3} alignItems="flex-start">
          <CardMedia
            component="img"
            image={selectedUniversity.logo}
            alt={selectedUniversity.name}
            sx={{ borderRadius: 2, objectFit: 'contain', height: 120, width: 160, background: '#f5f5f5', boxShadow: 'none', mb: { xs: 2, md: 0 } }}
          />
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom>
              <LocationOn fontSize="small" color="action" /> {selectedUniversity.location}
            </Typography>
            <Typography variant="body1" paragraph>
              {selectedUniversity.description}
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Rating value={selectedUniversity.rating} precision={0.1} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                {selectedUniversity.rating}
              </Typography>
            </Box>
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
                      {selectedUniversity.programs.map((program) => (
                        <Chip key={program} label={program} size="small" sx={{ mb: 0.5 }} />
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
                      {selectedUniversity.tuitionRange} COP por semestre
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
                      {selectedUniversity.modality.join(', ')}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Language fontSize="small" color="primary" />
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Sitio web
                    </Typography>
                    <Link href={`https://${selectedUniversity.website}`} target="_blank" rel="noopener noreferrer">
                      <Typography variant="body2">
                        {selectedUniversity.website}
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )}
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
