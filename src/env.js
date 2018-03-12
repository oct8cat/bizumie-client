exports.getServerURL = () =>
  process.env.REACT_APP_SERVER_URL || window.SERVER_URL

exports.getGraphQLURL = () => `${exports.getServerURL()}/graphql`

exports.getUploadURL = () => `${exports.getServerURL()}/upload`

exports.getSuccessURLTemplate = () =>
  encodeURIComponent(`${window.location.origin}/token/{token}`)
