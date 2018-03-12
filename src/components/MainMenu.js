const React = require('react')
const { Button, Menu } = require('semantic-ui-react')
const { getSuccessURLTemplate } = require('../env')
const { graphql } = require('react-apollo')
const { mainMenuQuery } = require('../queries')
const PropTypes = require('prop-types')

const MainMenu = ({ data: { loading, me } }) => {
  return (
    <Menu fixed="top" inverted borderless>
      <Menu.Menu position="right">
        <Menu.Item>
          {me ? (
            me.displayName
          ) : (
            <Button
              color="google plus"
              icon="google plus"
              as="a"
              href={`http://bizumie.redroach.es:3001/google?successURLTemplate=${getSuccessURLTemplate()}`}
            />
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

MainMenu.propTypes = {
  data: PropTypes.object.isRequired
}

module.exports = graphql(mainMenuQuery)(MainMenu)
