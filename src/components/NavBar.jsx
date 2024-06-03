import CartWidget from "./CartWidget.jsx";

function NavBar(){
    const navClick=()=>{
        console.log('click');
    }
    return(
        <>
            <header className="bg-sky-200">
                <nav>
                    <ul className="flex flex-row">
                        <li className="p-5"><a href="#" onClick={navClick}>Home</a></li>
                        <li className="p-5"><a href="#" onClick={navClick}>Productos</a></li>
                        <li className="p-5"><a href="#" onClick={navClick}>Nosotros</a></li> 
                        <li className="p-5"><a href="#" onClick={navClick}>Contactos</a></li>
                        <CartWidget/>
                
                    </ul>
                </nav>
            
            </header>
        </>
    )
}

export default NavBar;