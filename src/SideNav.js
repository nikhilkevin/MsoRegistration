
import Link from "@mui/material/Link";
import logo from "./main_logo_left.png";
import './App.css'; 
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import RoutesData from './Scripts/RoutesData'
import { useMediaQuery } from 'react-responsive'; 
import { 
  Route,
  Routes
} from 'react-router-dom';
import {Router,AppBar,DrawerHeader,Drawer,ListItemLink,GetRouteElem} from "./Scripts/RegistrationScripts";
import RegistrationModel from "./Models/RegistrationModel"

export default function MiniDrawer() {  
  const theme = useTheme();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [open, setOpen] = React.useState(!isMobile); 
  const handleDrawerOpen = () => {
    setOpen(!open);
  }; 
  const handleDrawerClose = () => {
    setOpen(!open);
  }; 
  const [disabledIndex, setDisabledIndex] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (index) => {     
    setSelectedIndex(index);    
  }; 

  function NavigateToNext(index)
  {
    setSelectedIndex(index); 
    setDisabledIndex(disabledIndex>= index ? disabledIndex:index);
  }
  const [state, setState] = useState(RegistrationModel)
   
  return (
    <Box sx={{ display: 'flex' }}>
       <Router>
      <CssBaseline />  
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"             
          >
            <MenuIcon />
          </IconButton>
          <img alt="Nationwide Logo" src={logo} className="App-logo" />
          <Typography variant="h6" noWrap component="div">
           <Link underline="none" color="inherit" className="App-name" href="#"> MSO Registration</Link>
          </Typography>
        </Toolbar>
      </AppBar>    
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider /> 
        <List>
          {RoutesData(NavigateToNext).menuitem.map((menuitem, index) => (
           <ListItemLink to={menuitem.menupath} primary={menuitem.menucaption} icon={menuitem.icon}
             key={menuitem.menucaption} 
             onclick={(event) => handleListItemClick(index)}
             Selected = {selectedIndex === index}
             Disabled = {!(index === disabledIndex || index < disabledIndex)} />
          ))}
        </List>  
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader /> 
        <Routes >
          <Route path="*" element={<GetRouteElem NavigateToNext = {NavigateToNext} FormState = {state} setFormDataState = {setState}/>} />
        </Routes> 
      </Box> 
      </Router>
    </Box>
  );
}

        