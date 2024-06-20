

import { Link } from "react-router-dom"



function Item({ item }) {


    return (
        <>
            

            <section className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 xl:grid-cols-6">



                {
                    item.map((producto, indice) => {

                        return (
                            <article key={indice} className="bg-white text-black p-4 text-center rounded-md shadow-xl hover:scale-105 transition-all">
                                <img src={producto.imagen} alt={producto.nombre} className="aspect-square object-contain" />
                                <h2 className="font-bold truncate">{producto.nombre}</h2>
                                <p className="text-gray-400">$ {producto.precio}</p>
                                <Link to={"/item/1"}>
                                    <button className="bg-blue-300 rounded-sm text-black p-2  ">detalles</button>
                                </Link>

                            </article>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Item;