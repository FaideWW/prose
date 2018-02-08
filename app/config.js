var cookie = require('./cookie');
var oauth = require('../oauth.json');

module.exports = {
  api: oauth.api || 'https://api.github.com',
  apiStatus: oauth.status || 'https://status.github.com/api/status.json',
  site: oauth.site || 'https://github.com',
  id: process.env.CLIENT_ID || oauth.clientId,
  url: process.env.GATEKEPEER_URL || oauth.gatekeeperUrl,
  username: cookie.get('username'),
  auth: 'oauth'
};
