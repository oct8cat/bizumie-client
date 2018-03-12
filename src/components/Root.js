const React = require('react')
const {
  BrowserRouter: Router,
  Route,
  Switch,
  Redirect
} = require('react-router-dom')
const { ApolloProvider, createApolloClient } = require('../apollo')
const apolloClient = createApolloClient()
const { getLogoutPageURL } = require('../env')

const TokenPage = require('../pages/TokenPage')
const IndexPage = require('../pages/IndexPage')
const LogoutPage = require('../pages/LogoutPage')

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <Switch>
        <Route path="/token/:token" component={TokenPage} />
        <Route path={getLogoutPageURL()} component={LogoutPage} />
        <Route path="/" component={IndexPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </ApolloProvider>
)

module.exports = Root
