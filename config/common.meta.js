const pj = require('../package.json')
module.exports = {
  name: pj.name,
  namespace: `${pj.name}`,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: ['https://boccaro.notion.site/*'],
  require: ['https://cdn.jsdelivr.net/npm/dplayer@1/dist/DPlayer.min.js'],
  resource: [],
  'run-at': 'document-idle',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_getResourceText', 'GM_addStyle', 'GM_registerMenuCommand'],
  icon: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-player-stay-home-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
}
