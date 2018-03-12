exports.getServerURL = () =>
  process.env.REACT_APP_SERVER_URL || window.SERVER_URL

exports.getGraphQLURL = () => `${exports.getServerURL()}/graphql`

exports.getUploadURL = () => `${exports.getServerURL()}/upload`

exports.getSuccessURLTemplate = () =>
  encodeURIComponent(`${window.location.origin}/token/{token}`)

exports.getTokenKey = () => 'BIZUMIE_TOKEN'

exports.getOAuthURL = () => process.env.REACT_APP_OAUTH_URL || window.OAUTH_URL

exports.getLogoutPageURL = () => `/logout`
