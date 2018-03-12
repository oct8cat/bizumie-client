const React = require('react')
const { Button } = require('semantic-ui-react')
const { withApollo, ApolloClient } = require('react-apollo')
const { UPLOAD_URL } = require('../const')
const { uploadsQuery } = require('../queries')
const PropTypes = require('prop-types')

class UploadPlus extends React.Component {
  constructor(props) {
    super(props)
    this.state = { file: null }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <form>
        <input
          type="file"
          name="upload"
          required
          onChange={this.handleChange}
          style={{ display: 'none' }}
        />
        <Button
          type="button"
          icon="add"
          basic
          circular
          onClick={this.handleClick}
        />
      </form>
    )
  }
  handleClick(e) {
    const { currentTarget } = e
    currentTarget.parentNode.elements.upload.click()
  }
  handleChange(e) {
    const { currentTarget } = e
    window
      .fetch(UPLOAD_URL, {
        method: 'POST',
        body: new window.FormData(currentTarget.parentNode)
      })
      .then(
        (res) =>
          res.ok ? res.json() : Promise.reject(new Error(res.statusText))
      )
      .then((json) => {
        const { upload } = json
        const data = this.props.client.readQuery({ query: uploadsQuery })
        data.uploads = (data.uploads || []).concat(
          Object.assign({ __typename: 'Upload' }, upload)
        )
        this.props.client.writeQuery({ query: uploadsQuery, data })
        currentTarget.parentNode.reset()
      })
  }
}
UploadPlus.propTypes = {
  client: PropTypes.instanceOf(ApolloClient)
}

module.exports = withApollo(UploadPlus)
