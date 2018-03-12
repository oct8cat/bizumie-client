const SERVER_URL = (exports.SERVER_URL =
  process.env.REACT_APP_SERVER_URL || window.SERVER_URL)
exports.GRAPHQL_URL = `${SERVER_URL}/graphql`
exports.UPLOAD_URL = `${exports.SERVER_URL}/upload`
