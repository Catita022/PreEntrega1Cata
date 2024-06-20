import CartWidget from "./CartWidget.jsx";
import {Link, NavLink} from "react-router-dom"

function NavBar(){
    // const navClick=()=>{
    //     console.log('click');
    // }
    return(
        <>
            <header className="bg-sky-200">
                <nav>
                    <ul className="flex flex-row">
                        
                        <li className="p-5"><NavLink to={"/"}>home</NavLink></li>
                        <li className="p-5"><NavLink to={"/productos"}>productos</NavLink></li>
                        <li className="p-5"><NavLink to={"/categoria/remeras"}>remeras</NavLink></li> 
                        <li className="p-5"><NavLink to={"/categoria/zapatillas"}>zapatillas</NavLink></li>
                        {/* <li className="p-5"><NavLink to={"/carrito"}>carrito</NavLink></li> */}
                        <CartWidget/>
                
                    </ul>
                </nav>
            
            </header>
        </>
    )
}

export default NavBar;