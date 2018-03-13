const { ApolloClient } = require('apollo-client')
const { ApolloProvider } = require('react-apollo')
const { from } = require('apollo-link')
const { HttpLink } = require('apollo-link-http')
const { onError } = require('apollo-link-error')
const { InMemoryCache } = require('apollo-cache-inmemory')
const { getGraphQLURL } = require('./env')
const { clearToken, readToken } = require('./token')

exports.ApolloProvider = ApolloProvider

exports.createApolloClient = () =>
  new ApolloClient({ cache: createCache(), link: createLink() })

const createCache = () => new InMemoryCache()

const createLink = () =>
  from([createAuthLink(), createErrorLink(), createHTTPLink()])

const createAuthLink = () => (op, next) => {
  const token = readToken()
  if (token) {
    op.setContext({ headers: { authorization: `Bearer ${token}` } })
  }
  return next(op)
}

const createHTTPLink = () => new HttpLink({ uri: getGraphQLURL() })

const createErrorLink = () =>
  onError((error, a, b, c) => {
    const { networkError } = error
    if (networkError && networkError.statusCode === 401) {
      clearToken()
      window.location.reload()
    }
  })
