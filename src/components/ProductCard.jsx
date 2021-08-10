import { Link } from 'gatsby'
import React from 'react'

export default ( {product} ) => {
    return (
        <article className="card p-4">
            <header>
                <h2 className="font-bold uppercase text-2xl">
                    <Link to={`/productos/${product.slug}`}>{ product.name }</Link>
                </h2>
            </header>
        </article>
    )
}
