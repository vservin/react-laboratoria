import { AppBar, Toolbar, Typography } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

import MenuComida from './componentes/MenuComida';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <LunchDiningIcon sx={{ mr: 2 }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Burger Queen
          </Typography>
        </Toolbar>
      </AppBar>
      <MenuComida />
    </>
  );
}

export default App;
