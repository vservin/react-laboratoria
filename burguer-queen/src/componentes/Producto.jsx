import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Producto = ({ id, titulo, imagen, descripcion, precio, onProductAdded}) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <Card sx={{ width: 345, mr: 2 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {descripcion}
        </Typography>
        <strong> {precio} MXN</strong>
        <Box sx={{ mt: 2 }}>
          <TextField 
            id="outlined-basic" 
            label="Cantidad" 
            variant="outlined" 
            type="number"
            onChange={(evt) => {
              setCantidad(parseInt(evt.target.value))
            }}
            value={cantidad}
          />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          setCantidad(1)
          onProductAdded({ id, titulo, cantidad })
        }}>Comprar</Button>
        <Button size="small">Detalles</Button>
      </CardActions>
    </Card>
  );
}

export default Producto;