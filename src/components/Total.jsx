import React from 'react'
import Price from './Price'

export default ({shoppingCart}) => {
    // [{ price: 10 }, { price: 20 }] => 30
    // total = 30
    const total = shoppingCart.reduce(
        (total, product) => (product.unit_amount * product.quantity) + total
    , 0)
    return (
        <div>
            <p className="uppercase text-blue-200">Total</p>
            <Price unit_amount={total} currency={"MXN"} className="text-2xl"></Price>
        </div>
    )
}
