import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Café americano
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Muy bueno y barato :)
              </Typography>
              <strong> 35.00 MXN</strong>
            </CardContent>
            <CardActions>
              <Button size="small">Comprar</Button>
              <Button size="small">Detalles</Button>
            </CardActions>
          </Card>
        </TabPanel>
        <TabPanel value="2">Almuerzo y Cena</TabPanel>
      </TabContext>
    </Box>
  )
}

export default MenuComida;