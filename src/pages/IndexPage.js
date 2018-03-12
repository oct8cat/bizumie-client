const React = require('react')
const { Container } = require('semantic-ui-react')

const UploadList = require('../components/UploadList')
const MainMenu = require('../components/MainMenu')

const IndexPage = () => (
  <div>
    <MainMenu />
    <Container style={{ paddingTop: 64 }}>
      <UploadList />
    </Container>
  </div>
)

module.exports = IndexPage
