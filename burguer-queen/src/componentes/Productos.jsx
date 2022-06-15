import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import axios from "axios";

const endpoints = {
  desayunos: "https://mocki.io/v1/43d3586f-c214-4537-a401-aadf2a9368a8"
}

const Productos = ({ type }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(endpoints[type])
    .then(({ data: productos }) => setProductos(productos))
  }, [type])

  return (
    <div>
        { productos.map((producto) => (
          <Card sx={{ maxWidth: 345 }} key={producto.titulo}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={producto.imagen}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {producto.descripcion}
              </Typography>
              <strong> {producto.precio} MXN</strong>
              <Box sx={{ mt: 2 }}>
                <TextField id="outlined-basic" label="Cantidad" variant="outlined" type="number" />
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small">Comprar</Button>
              <Button size="small">Detalles</Button>
            </CardActions>
          </Card>
        ))}
    </div>
  )
}

export default Productos;