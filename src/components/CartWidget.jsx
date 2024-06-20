
import { NavLink } from "react-router-dom";

function CartWidget(){
    
    const cantProd = 6;
    return (
        <>
        <li className=""><NavLink to={"/carrito"}><span>{cantProd}</span><img className="w-7 h-7" src="/carro.png" alt="img-carro"></img></NavLink></li>
        
        </>
    )
}

export default CartWidget;