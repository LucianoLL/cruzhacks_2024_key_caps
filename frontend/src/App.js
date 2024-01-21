import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import BreakfastPage from './Pages/BreakfastPage';
import DinnerPage from './Pages/DinnerPage';
import LunchPage from './Pages/LunchPage';
import Navbar from './Components/Navbar';

export default function App() {
  
  const theme = createTheme({
    typography:{
      fontFamily: 'Poppins'
      
    }

  })
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes> 
          <Route index element = {<HomePage/>}/>
          <Route path='/breakfast' element = {<BreakfastPage/>}/>
          <Route path='/dinner' element = {<DinnerPage/>}/>
          <Route path ='/lunch' element={<LunchPage/>}/>

        </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </>

  );
}

