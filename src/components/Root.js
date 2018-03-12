const React = require('react')
const { Container } = require('semantic-ui-react')
const { ApolloProvider, createApolloClient } = require('../apollo')
const apolloClient = createApolloClient()
const UploadList = require('./UploadList')
const MainMenu = require('./MainMenu')

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <div>
      <MainMenu />
      <Container style={{ paddingTop: 64 }}>
        <UploadList />
      </Container>
    </div>
  </ApolloProvider>
)

module.exports = Root
