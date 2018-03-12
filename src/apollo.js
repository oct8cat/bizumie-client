const { ApolloClient } = require('apollo-client')
const { ApolloProvider } = require('react-apollo')
const { concat } = require('apollo-link')
const { HttpLink } = require('apollo-link-http')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { getGraphQLURL } = require('./env')
const { readToken } = require('./token')

exports.ApolloProvider = ApolloProvider

exports.createApolloClient = () =>
  new ApolloClient({
    cache: createCache(),
    link: createLink()
  })

const createCache = () => new InMemoryCache()

const createLink = () => concat(createAuthLink(), createHTTPLink())

const createAuthLink = () => (op, next) => {
  const token = readToken()
  if (token) {
    op.setContext({ headers: { authorization: `Bearer ${token}` } })
  }
  return next(op)
}

const createHTTPLink = () => new HttpLink({ uri: getGraphQLURL() })
