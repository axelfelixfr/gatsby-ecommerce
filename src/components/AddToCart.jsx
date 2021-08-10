import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export default ({ addProduct }) => {
    return (
        <button onClick={ addProduct } className="app-btn text-xl">
            Agregar al carrito 
            <IconContext.Provider value={{ className:"inline-block ml-2 text-xl" }}>
                <FaCartPlus></FaCartPlus>
            </IconContext.Provider> 
        </button>
    )
}
