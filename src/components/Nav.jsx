import { Link } from 'gatsby'
import React from 'react'
import { IoMdCart } from 'react-icons/io'
import { IconContext } from 'react-icons'
// Generamos los items de la nav, con su nombre y su href
const navItems = [
    {
        caption: 'Home',
        href: '/'
    },
    {
        caption: 'Products',
        href: '/productos'
    }
]

export default (props) => {
    return (
        <header className="shadow-md bg-blue-900 text-blue-100">
            <nav className="flex">
                <ul className="flex flex-1">
                    {
                        navItems.map((item, index)=>( 
                            <li key={index}> 
                                <Link className="inline-block px-6 py-4 hover:bg-blue-700" to={item.href}>{item.caption}</Link>
                            </li>
                        ))
                    }
                </ul>
                <Link to='/carrito' className="inline-block px-6 py-4 hover:bg-blue-800 bg-blue-500"> 
                    <IconContext.Provider value={{ className:"inline-block mr-2 text-xl" }}>
                        <IoMdCart></IoMdCart>
                    </IconContext.Provider> 
                    {props.shopping_cart.length} 
                </Link>
            </nav>
        </header>
    )
}
