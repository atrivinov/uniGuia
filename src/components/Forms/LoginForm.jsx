
import { 
  Box, 
  Typography, 
  Button, 
  TextField,

} from '@mui/material';
// Componente de formulario de inicio de sesión

export const LoginForm = () => {
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