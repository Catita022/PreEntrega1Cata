import {  useContext, useState } from "react"
import { miContexto } from "./CartProvaider";

const Carrito = () => {

    const [nombre , setNombre] = useState('')
    const [email , setEmail]= useState('')
    const contexto = useContext(miContexto)
   
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nombre=='' || isNaN(nombre)==false ){
            alert('ingresa los datos requeridos en nombre')
            
        }else{
            
            console.log('enviado',{nombre,email})
            alert('todo ok gracias por tu compra')
            contexto.fn3()
            form.reset()
        }
        
        
    }

    const handleNombre = (e)=>{
        setNombre(e.target.value)
        console.log(e.target.value)
        
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)

    }

    return (

        <div>
            <h1 className="titulo-carrito">Ingresá tus datos</h1>
            <form className="formulario" onSubmit={handleSubmit} id="form">
                <input className="formulario-input" type="text" placeholder="Ingresá tu nombre" onChange={handleNombre} required/>
                <input className="formulario-input" type="email" placeholder="Ingreá tu email" onChange={handleEmail} required/>
                <button className="mx-auto bg-blue-500 rounded-xl p-4 m-2" type="submit">enviar</button>
                
            </form>

           
        </div>
    );
};


export default Carrito;