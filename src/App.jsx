import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Toolbar from './Toolbar';

const App=()=>{
  return(
    <ThemeProvider>
    <Toolbar/>
    
    </ThemeProvider>
  )
}

export default App;
