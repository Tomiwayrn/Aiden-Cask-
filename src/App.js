import Home from './pages/home'
import NavBar from './components/navbar';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import bgImage from './assests/images/background.jpg'; // Recommended for local files

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        },
      },
    },
  },

   typography: {
    // Default font for the app (applies to <p> / body1, body2, buttons, etc.)
    fontFamily: "'Inter', sans-serif",
    
    // Specific font for <Typography variant="h3">
    h5: {
      fontFamily: "'DM Serif Display', serif",
    },

    // Optional: explicitly target body1 (standard <p> tag) if you want it separate from the app default
    body1: {
      fontFamily: "'Averia Serif Libre', sans-serif",
    }}
});

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <div className="App">
      <NavBar />
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
