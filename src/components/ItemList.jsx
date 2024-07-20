

import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Item from "./Item"
import Banner from "./Banner";
import { generateProducts ,getProductsByCategory, getProducts } from "../actions";




function ItemList() {

    const [producto, setProducto] = useState([])

    
    const params = useParams()
    
    useEffect(() => {
        
        if (params.id=='ropa' || params.id=='calzados') {
            
            getProductsByCategory(params.id).then((res)=>setProducto(res))
            
            
            
        } if(params.id=='productos'){
            
            getProducts().then((res)=>{setProducto(res)})
            
            
        }else{
            <Banner/>
            
        } 




    }, [params.id])

    
   





    return (
        <>

            <Item item={producto} />


        </>
    )


}


export default ItemList;