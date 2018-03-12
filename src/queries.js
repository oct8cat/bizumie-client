const gql = require('graphql-tag')

exports.uploadsQuery = gql`
  query UploadsQuery {
    uploads {
      id
      url
      originalName
    }
  }
`

exports.mainMenuQuery = gql`
  query MainMenuQuery {
    me {
      id
      displayName
    }
  }
`
