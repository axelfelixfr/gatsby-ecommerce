import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { addItem, addToCart } from '../state/actions/shopping_cart'
import AddToCart from './AddToCart';

const AddToCartBtn = ( {sku} ) => {
    const dispatch = useDispatch();
    const addProductToCart = (ev) => {
        dispatch(addItem(sku));
    }
    return (
        <AddToCart addProduct={addProductToCart}></AddToCart>
    )
}

export default connect(null, { addToCart })(AddToCartBtn);