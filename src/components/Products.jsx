import React from 'react'
import ProductCard from './ProductCard'

export default ({ products }) => {
    return (
        <div>
            {   
                //props.data.allStripeProduct.nodes = products
                products.map( (product) => (
                    <ProductCard product={product} key={product.id}>{ product.name }</ProductCard>
                ))
            }
        </div>
    )
}









