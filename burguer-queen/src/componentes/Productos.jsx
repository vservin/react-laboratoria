import { useEffect, useState } from 'react';
import Box from "@mui/material/Box";

import axios from "axios";

import Producto from "./Producto";

const endpoints = {
  desayunos: "https://mocki.io/v1/aa80332f-3621-4c15-bc27-b806a484eded"
}

const Productos = ({ type, onProductAdded }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(endpoints[type])
    .then(({ data: productos }) => setProductos(productos))
  }, [type])

  return (
    <Box sx={{ display: "flex" }}>
        { productos.map((producto) => (
          <Producto {...producto} key={producto.id} onProductAdded={onProductAdded}/>
        ))}
    </Box>
  )
}

export default Productos;