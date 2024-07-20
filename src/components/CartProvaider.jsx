

import { createContext } from "react";
import { useState } from "react";
export const miContexto = createContext()
const Provaider = miContexto.Provider



function CartProvaider(props) {
    const [carritoCant, setCarritoCant] = useState(0);
   

    const valorDelContexto = {
        cant: carritoCant,
        fn: () => {
            setCarritoCant(carritoCant + 1)
        },
        fn2: () => {
            if (carritoCant > 0) {
                setCarritoCant(carritoCant - 1)
            } else {
                setCarritoCant(0)
            }

        },
        fn3: () => {
            setCarritoCant(0)
        }
       
    }
    return (
        <Provaider value={valorDelContexto}>
            {props.children}
        </Provaider>
    )
}

export default CartProvaider;