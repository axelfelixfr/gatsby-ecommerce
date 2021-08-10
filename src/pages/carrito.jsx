import React from 'react'
import { shallowEqual, useSelector } from 'react-redux';
import Layout from '../components/Layout'
import ShoppingCart from '../components/ShoppingCart';

export default (props) => {
    const shoppingCart = useSelector(state => state.shopping_cart, shallowEqual);
    return (
        <Layout>
            <ShoppingCart shoppingCart={shoppingCart}></ShoppingCart>
        </Layout>
    )
}
