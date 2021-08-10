import React from 'react'
import AddToCartConnected from './AddToCartConnected';
import Price from './Price';

export default ({ products, skus, allProducts }) => {
    const sku = skus[0];
    return (
        <article className="card">
            <header className="p-6 text-center bg-blue-800">
                <div className="flex text-left">
                    <div className="flex-1">
                        {
                            (sku && sku.product.images) &&
                            <img src={skus[0].product.images} alt="Imagen del Producto"></img>
                        }
                    </div> 
                    <div className="flex-1 px-6">
                        <p className="text-blue-300">Precio</p>
                        <Price {...sku} className="text-2xl"></Price>
                    </div>
                </div>
            </header>
            <div className="text-center p-6">
                <h1 className="text-3xl uppercase mb-4">{ sku.product.name }</h1>
                <AddToCartConnected sku={sku}></AddToCartConnected>
            </div>
        </article>
    )
}
