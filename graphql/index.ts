import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ProductListQuery, ProductListQueryVariables } from "_final/graphql/types";

// Step 4: Create ApolloClient instance
const client = new ApolloClient({
    uri: "https://vercel.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
})
// Step 5: Create basic ProductList query that fetches first 8 product names
const PRODUCTS_LIST_QUERY = gql`

  fragment Product on Product {
    id
    name
    thumbnail {
      url
    }
  }

    query ProductList{
        products(channel: "default-channel", first: 8){
            edges{
                node {
                  ...Product
                  }
                }
            }
        }
    
`;
// Step 6: Create fetchProducts() wrapper function
export const fetchProducts =()=> client.query<ProductListQuery>({
    query: PRODUCTS_LIST_QUERY
})
// Step 8: Extend the query to include thumbnail image

// Step 10: Add TS types ⚡️
