import React from 'react'
import ClearShoppingCart from './ClearShoppingCart'
import { useDispatch } from 'react-redux'
import { clearShoppingCart } from '../state/actions/shopping_cart'

export default (props) => {
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(clearShoppingCart())
    }
    return (
        <ClearShoppingCart clear={clear}></ClearShoppingCart>
    )
}
