const React = require('react')
const {Container} = require('semantic-ui-react')
const {ApolloProvider, createApolloClient} = require('../apollo')
const apolloClient = createApolloClient()
const UploadList = require('./UploadList')

module.exports = () => (
  <ApolloProvider client={apolloClient}>
    <Container style={{paddingTop: 50}}>
      <UploadList />
    </Container>
  </ApolloProvider>
)
