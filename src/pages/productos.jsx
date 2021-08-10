import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Products from "../components/Products"

/* Se extrae la información */
export default (props) => {
    const products = props.data.allStripeProduct.nodes;

    return (
        <Layout>
            <Products products={products}></Products>
        </Layout>
    )
}

/* Hacemos la consulta a graphql */
export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        name
        slug
      }
    }
  }
`;