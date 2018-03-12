const React = require('react')
const { graphql } = require('react-apollo')
const { Card, Message } = require('semantic-ui-react')
const UploadPlus = require('./UploadPlus')
const { map } = require('ramda')
const { uploadsQuery } = require('../queries')
const { getServerURL } = require('../env')

module.exports = graphql(uploadsQuery)(
  ({ data: { error, loading, ...data } }) => {
    if (error) return <Message error>{error.message}</Message>
    if (error || loading) return null

    return (
      <Card.Group itemsPerRow={6}>
        {map(
          (upload) => (
            <Card
              key={upload.id}
              meta={{ content: upload.originalName, textAlign: 'center' }}
              image={`${getServerURL()}${upload.url}`}
            />
          ),
          data.uploads
        )}
        <Card>
          <Card.Content
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <UploadPlus />
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
)
