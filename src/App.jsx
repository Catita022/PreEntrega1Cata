

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import { BrowserRouter } from "react-router-dom"
import './firebaseConfig.js'
import CartProvaider from './components/CartProvaider.jsx'





function App() {
  

  return (
    <BrowserRouter>

      <CartProvaider>

        <NavBar />
        <ItemListContainer greeting="el baúl de las mil maravillas" />
        <Footer />

      </CartProvaider>
    </BrowserRouter>
  )


}

export default App
