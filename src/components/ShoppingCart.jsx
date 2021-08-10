import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../components/Layout'
import CardItem from './CardItem'
import CheckoutConnected from './CheckoutConnected'
import ClearShoppingCartConnected from './ClearShoppingCartConnected'
import Total from './Total'

export default ({ shoppingCart }) => {
    
    return (
        <div className="card">
            <div className="flex items-end bg-blue-700">
                <div className="flex-1">
                    <header className="flex p-6 items-center">
                        <h2 className="text-3xl flex-1 font-semibold">Mi carrito de compras</h2>
                        <div>
                            <ClearShoppingCartConnected></ClearShoppingCartConnected>
                        </div>
                    </header>
                    <ul>
                        {
                            shoppingCart.map(sku => <CardItem sku={sku} key={sku.product.id}></CardItem>)
                        }
                    </ul>
                </div>
                <div className="w-1/3 text-right p-6 font-semibold">
                    <Total shoppingCart={shoppingCart}></Total>
                </div>
            </div>
            <div className="p-6">
                <CheckoutConnected shoppingCart={shoppingCart}></CheckoutConnected>
            </div>
        </div>
    )
    
}
