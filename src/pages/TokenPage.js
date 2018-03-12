const React = require('react')
const { persistToken } = require('../token')
const PropTypes = require('prop-types')

class TokenPage extends React.Component {
  render() {
    return null
  }
  componentDidMount() {
    const { match: { params: { token } }, history } = this.props
    persistToken(token)
    history.replace('/')
  }
}

TokenPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

module.exports = TokenPage
