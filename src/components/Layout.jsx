import React, { Fragment } from 'react'
/**
 * Fragment es el componente padre (o raíz) dentro tendra componentes hijos
 */
import NavConnected from './NavConnected'
/**
import { Helmet } from 'react-helmet'
 * Helmet es un componente que ayuda a añadir atributos en el head a través de este componente
 */
import SEO from './SEO'

export default (props) => {
    return (
        <Fragment>
            {/* <Helmet title="E-commerce Serverless">
                <meta name="description" content="Marketplace cool"></meta>
            </Helmet> */}
            <SEO></SEO>
            <NavConnected></NavConnected>
            <main className="max-w-4xl mx-auto">{ props.children }</main>
        </Fragment>
    )
}
