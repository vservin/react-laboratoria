import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Productos from "./Productos";

const MenuComida = () => {
  const [activeTab, setActiveTab] = useState("1"); 

  const onTabChange = (event, value) => {
    setActiveTab(value);
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={activeTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={onTabChange} aria-label="lab API tabs example">
            <Tab label="Desayuno" value="1" />
            <Tab label="Almuerzo y cena" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Productos type="desayunos"/>
        </TabPanel>
        <TabPanel value="2">Almuerzo y Cena</TabPanel>
      </TabContext>
    </Box>
  )
}

export default MenuComida;