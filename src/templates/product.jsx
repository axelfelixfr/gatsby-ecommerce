import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Product from '../components/Product';

export default (props) => {
    const product = props.data.stripeProduct;
    const skus = props.data.allStripePrice.nodes;
    const allProducts = props.data.allStripeProduct.nodes;
    return (
        <Layout>
            <Product skus={skus} allProducts={allProducts} product={product}></Product>
        </Layout>
    )
}


export const pageQuery = graphql`
    query($id : String) {
        stripeProduct(id: { eq: $id }) {
            id
            name
            slug
            images
        }
        allStripeProduct(filter: {id: {eq: $id}}){
            nodes {
              name
              slug
              id
              images
            }
          }
        allStripePrice(filter: {product: {id: {eq: $id}}}) {
            nodes {
                product {
                  name
                  images
                  created
                  id
                }
                unit_amount
                currency
                id
              }
          }
    }
    
`;