const React = require('react')
const {graphql} = require('react-apollo')
const {Card, Message} = require('semantic-ui-react')
const UploadPlus = require('./UploadPlus')
const {isEmpty, map} = require('ramda')
const {uploadsQuery} = require('../queries')
const {SERVER_URL} = require('../const')

module.exports = graphql(uploadsQuery)(({data: {error, loading, ...data}}) => {
  if (error) return <Message error>{error.message}</Message>
  if (error || loading) return null

  return (
    <div>
      {(isEmpty(data.uploads)) ? (
        'No uploads'
      ) : (
        <Card.Group itemsPerRow={6}>
          {map((upload) => (
            <Card
              key={upload.id}
              meta={{content: upload.originalName, textAlign: 'center'}}
              image={`${SERVER_URL}${upload.url}`}
            />
          ), data.uploads)}
          <Card>
            <Card.Content style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <UploadPlus />
            </Card.Content>
          </Card>
        </Card.Group>
      )}
    </div>
  )
})
