const React = require('react')
const PropTypes = require('prop-types')
const { withApollo } = require('react-apollo')
const { ApolloClient } = require('apollo-client')
const { clearToken } = require('../token')

class LogoutPage extends React.Component {
  render() {
    return null
  }
  componentDidMount() {
    const { client, history } = this.props
    clearToken()
    client.resetStore().then(() => history.replace('/'))
  }
}

LogoutPage.propTypes = {
  history: PropTypes.object.isRequired,
  client: PropTypes.instanceOf(ApolloClient).isRequired
}

module.exports = withApollo(LogoutPage)
