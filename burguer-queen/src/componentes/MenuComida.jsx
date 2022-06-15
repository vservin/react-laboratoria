import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Productos from "./Productos";

const MenuComida = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [productsToBuy, setProductsToBuy] = useState({});

  const onTabChange = (event, value) => {
    setActiveTab(value);
  }

  const addProductToBuy = (newProduct) => {
    const old = productsToBuy[newProduct.id];

    const toAdd = old
      ? { ...old, cantidad: newProduct.cantidad + old.cantidad } : newProduct;

    const newList = {
      ...productsToBuy,
      [newProduct.id]: toAdd
    };

    setProductsToBuy(newList)
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={activeTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={onTabChange} aria-label="lab API tabs example">
              <Tab label="Desayuno" value="1" />
              <Tab label="Almuerzo y cena" value="2" />
            </TabList>
          </Box>
          <Box sx={{ display: "flex" }}>
            <TabPanel value="1">
              <Productos type="desayunos" onProductAdded={addProductToBuy}/>
            </TabPanel>
            <TabPanel value="2">Almuerzo y Cena</TabPanel>
            <Box>
                {Object.entries(productsToBuy).map(([key, { titulo, cantidad}]) => (
                  <p key={key}>{titulo}, cantidad: {cantidad}</p>
                ))}
            </Box>
          </Box>
        </TabContext>
      </Box>
    </>
  )
}

export default MenuComida;