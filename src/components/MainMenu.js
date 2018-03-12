const React = require('react')
const { Dropdown, Button, Menu } = require('semantic-ui-react')
const { Link } = require('react-router-dom')
const {
  getLogoutPageURL,
  getOAuthURL,
  getSuccessURLTemplate
} = require('../env')
const { graphql } = require('react-apollo')
const { mainMenuQuery } = require('../queries')
const PropTypes = require('prop-types')

const MainMenu = ({ data: { loading, me } }) => {
  return (
    <Menu fixed="top" inverted borderless>
      <Menu.Menu position="right">
        <Menu.Item>
          {me ? (
            <Dropdown text={me.displayName}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={getLogoutPageURL()}>
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Button
              color="google plus"
              icon="google plus"
              as="a"
              href={`${getOAuthURL()}/google?successURLTemplate=${getSuccessURLTemplate()}`}
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
