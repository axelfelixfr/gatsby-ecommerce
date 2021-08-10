import React from 'react'
import Price from './Price'

export default ({sku}) => {
    return (
        <div className="p-6 border-b flex">
            <div className="flex-1">
                <p className="font-bold uppercase">{ sku.product.name }</p>
                <Price {...sku} className="mt-1 text-blue-300"></Price>
            </div>
            <div>
                <p className="px-4">{ sku.quantity }</p>
            </div>
        </div>
    )
}
