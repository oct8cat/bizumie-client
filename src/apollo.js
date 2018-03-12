const { ApolloClient } = require('apollo-client')
const { ApolloProvider } = require('react-apollo')
const { HttpLink } = require('apollo-link-http')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { getGraphQLURL } = require('./env')

exports.createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: getGraphQLURL() }),
    cache: new InMemoryCache()
  })
}

exports.ApolloProvider = ApolloProvider
