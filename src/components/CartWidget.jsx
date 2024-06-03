

function CartWidget(){
    const cantProd = 6;
    return (
        <>
        <li className=""><a href="#"><span>{cantProd}</span><img className="w-7 h-7" src="/carro.png" alt="img-carro"></img></a></li>
        
        </>
    )
}

export default CartWidget;