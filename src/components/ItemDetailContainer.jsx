import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
function ItemDetailContainer() {
    const [producto,setProducto] = useState([])
    useEffect(() => {


        fetch('../remeras.json')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                
                setProducto(data.remeras)
            });


    }, [])
    
    return (
        <>
            
            <ItemDetail item={producto} />
        </>
    )
}

export default ItemDetailContainer;