
import { NavLink } from "react-router-dom";
import {miContexto} from "./CartProvaider";
import { useContext } from "react";
function CartWidget(){
    const cantProd = useContext(miContexto)
    
    return (
        <>
        <li className=""><NavLink to={"/carrito"}><span>{cantProd.cant}</span><img className="w-7 h-7" src="/carro.png" alt="img-carro"></img></NavLink></li>
        
        </>
    )
}

export default CartWidget;