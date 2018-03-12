const { ApolloClient } = require('apollo-client')
const { ApolloProvider } = require('react-apollo')
const { HttpLink } = require('apollo-link-http')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { GRAPHQL_URL } = require('./const')

exports.createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: GRAPHQL_URL }),
    cache: new InMemoryCache()
  })
}

exports.ApolloProvider = ApolloProvider
