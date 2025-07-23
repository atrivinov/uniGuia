import { 
  Box, 
  Grid,
  Button, 
  TextField,

} from '@mui/material';


// Componente de formulario de registro
export const RegisterForm = () => {
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