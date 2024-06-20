import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from "../src/components/ItemListContainer.jsx"
import { BrowserRouter} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      <ItemListContainer greeting="el baúl de las mil maravillas" />
      
    </BrowserRouter>
  )

  
}

export default App
