import React, { useEffect, useState } from 'react'
import Checkout from './Checkout';

export default ({ shoppingCart }) => {
    console.log(shoppingCart);
    const [stripe, setStripe] = useState({});
    useEffect(() => {
        setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
    }, []); // componentDidMount

    const redirectToCheckout = async (ev) => {
        const response = await stripe.redirectToCheckout({
            //lineItems: [ { price: sku.id, quantity: 1 } ],
            lineItems: shoppingCart.map( price => ({price: price.id, quantity: price.quantity})),
            mode: 'payment',
            submitType: 'pay',
            successUrl: `http://localhost:8000/completado`,
            cancelUrl: `http://localhost:8000`,
        });

        if(response.error){
            console.log(response.error)
        }
        
    }

    return (
        <Checkout redirectToCheckout={redirectToCheckout}></Checkout>
    )
}
