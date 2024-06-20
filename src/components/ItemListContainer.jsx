import { Routes, Route } from "react-router-dom"
import ItemDetailCointeiner from "./ItemDetailContainer.jsx"
import ItemList from './ItemList.jsx'

function ItemListContainer(props) {

    return (
        <>
            <main>
                <section>
                    <h1 className="mi-titulo">{props.greeting}</h1>

                </section>
                <Routes>
                    <Route path="/" element={<p></p>} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/categoria/:id" element={<ItemListContainer />} />
                    <Route path="/carrito" element={<p>carrito</p>} />
                    <Route path="item/:id" element={<ItemDetailCointeiner/>}/>
                </Routes>

                <ItemList />

            </main>


        </>
    )
}

export default ItemListContainer;