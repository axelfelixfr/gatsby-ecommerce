import React from 'react'

export default ({ redirectToCheckout }) => {
    return (
        <button onClick={redirectToCheckout} className="app-btn w-100">Checkout</button>
    )
}
