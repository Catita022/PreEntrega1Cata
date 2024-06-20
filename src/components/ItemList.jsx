

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item"






function ItemList() {

    const [producto, setProducto] = useState([])
    

    const params = useParams();

    
    useEffect(() => {
        
        
        if (params.id) {
            fetch('../remeras.json')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {

                    setProducto(data.remeras)
                });
        } else{

            fetch('./productos.json')
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    
                    setProducto(data.productos)
                });


        }


    },[params.id])

    


    

    return (
        <>   

            <Item item={producto}/>

        </>
    )


}


export default ItemList;