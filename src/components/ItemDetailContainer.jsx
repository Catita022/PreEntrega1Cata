import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getProductsByIdAsync } from "../actions";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const params = useParams()
    useEffect(() => {
        const dato = getProductsByIdAsync(params.id)
        dato.then((res)=>setProducto(res))
       
        

    }, [params.id])
    
    return (
        <>
            
            <ItemDetail item={producto} />
            
        </>
    )
}


export default ItemDetailContainer;