import CartWidget from "./CartWidget.jsx";
import {NavLink}  from "react-router-dom";


function NavBar(){
   
    return(
        <>
            <header className="bg-sky-200 border-collapse">
                <nav>
                    <ul className="flex flex-row">
                    
                        <li className="p-5"><NavLink to={"/"}><img className="w-7 h-7" src="/home.png" alt="img-home"></img></NavLink></li>
                        <li className="p-5"><NavLink  to={"/home/productos"}>productos</NavLink></li>
                        <li className="p-5"><NavLink  to={"categoria/ropa"}>ropa</NavLink></li> 
                        <li className="p-5"><NavLink  to={"categoria/calzados"}>zapatillas</NavLink></li>
                        
                        
                        <CartWidget/>
                
                    </ul>
                </nav>
            
            </header>
        </>
    )
}


export default NavBar;