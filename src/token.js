const { getTokenKey } = require('./env')

exports.persistToken = (token) => {
  window.localStorage.setItem(getTokenKey(), token)
}

exports.readToken = () => window.localStorage.getItem(getTokenKey())

exports.clearToken = () => window.localStorage.removeItem(getTokenKey())
