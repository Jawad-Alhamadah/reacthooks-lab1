
import './App.css'
import Calc from './components/Calc'
import React from 'react';
import { useState } from 'react';
function App() {
  let [theme,SetTheme] = React.useState("dark:bg-slate-700 w-screen h-screen light")

  const toggleTheme = () => {
    SetTheme (theme.includes("dark")? "dark:bg-slate-700 w-screen h-screen light": "dark:bg-slate-700 w-screen h-screen light dark")
   // document.documentElement.classList.toggle('dark');
  };
 
  return (
    <div className={theme}>
      <Calc ></Calc>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  )
}

export default App
