import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6ibifot4qoh01ta34f49056/master',
  cache: new InMemoryCache()
})
