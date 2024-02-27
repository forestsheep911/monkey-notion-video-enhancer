const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: pj.name,
  namespace: pj.homepage,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://boccaro.notion.site/*'],
  require: [],
  resource: [],
  'run-at': 'document-end',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_getResourceText', 'GM_addStyle'],
  icon: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-player-stay-home-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
}
