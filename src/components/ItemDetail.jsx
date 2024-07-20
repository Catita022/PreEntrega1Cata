import { useContext } from "react";
import { Link } from "react-router-dom";
import { miContexto } from './CartProvaider';


function ItemDetail({ item }) {
    
    

    const contexto = useContext(miContexto)
   

    const incrementaValorContexto = () => {
        contexto.fn()
       
    }
    const decrementaValorContexto = ()=>{
        contexto.fn2()
    }
    const sacarProductoCarrito = ()=>{
        contexto.fn3()
    }

    const comprandoProductos = ()=>{
        if(contexto.cant==0){
            alert('no cargaste productos en el carrito')
            
        }
    }

    
    return (
        <>
            <section className="flex flex-row p-4 m-4 w-1/2 mx-auto">
                <article className="bg-white text-black p-4 text-center rounded-md shadow-xl hover:scale-105 transition-all">
                    <img src={item.imagen} alt={item.nombre} className="aspect-square object-contain  mx-auto" />
                    <h2 className="font-bold truncate">{item.nombre}</h2>
                    <p className="text-gray-400">$ {item.precio}</p>
                    <button className="bg-blue-300 rounded-xl text-black p-2 m-1 size-10 " onClick={incrementaValorContexto}>+</button>
                    <button className="bg-blue-300 rounded-xl text-black p-2 m-1 size-10 " onClick={decrementaValorContexto}>-</button>


                </article>
                <div className="p-4 my-auto">
                    <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quos tenetur odit numquam soluta laborum id esse iure quidem debitis
                        qui aliquid eius beatae, excepturi perspiciatis, odio adipisci ipsa explicabo.</p>
                    <Link to={'/carrito'}>
                        <button className="bg-blue-500 rounded-xl text-black p-1 m-3" onClick={comprandoProductos}>comprar</button>
                    </Link>
                    <button className="bg-blue-500 rounded-xl text-black p-1 m-3" onClick={sacarProductoCarrito}>eliminar</button>

                </div>

                
            </section>

        </>
        )

}


export default ItemDetail;