const React = require('react')
const { Container } = require('semantic-ui-react')
const { ApolloProvider, createApolloClient } = require('../apollo')
const apolloClient = createApolloClient()
const UploadList = require('./UploadList')

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Container style={{ paddingTop: 50 }}>
      <UploadList />
    </Container>
  </ApolloProvider>
)

module.exports = Root
