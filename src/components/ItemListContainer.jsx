
import {Route, Routes} from "react-router-dom";
import Banner from "./Banner.jsx";
import ItemDetailCointeiner from "./ItemDetailContainer.jsx";
import ItemList from './ItemList.jsx'
import Carrito from "./Carrito.jsx";

function ItemListContainer(props) {
    
    return (
        <>
            <main>
                <section>
                    <h1 className="mi-titulo">{props.greeting}</h1>

                </section>
                
                <Routes>
                    <Route path="/" element={<Banner/>} />
                    <Route path="/home/:id" element={<ItemListContainer/>} />
                    <Route path="/categoria/:id/*" element={<ItemListContainer/>} />
                    <Route path="/carrito" element={<Carrito/>} />
                    <Route path="/item/:id" element={<ItemDetailCointeiner/>}/>
                </Routes>

               

            </main>

            <ItemList />
        </>
    )
}

export default ItemListContainer;