const pj = require('../package.json')
module.exports = {
  name: `${pj.name}-friend`,
  namespace: `${pj.homepage}-friend`,
  version: pj.version,
  description: pj.description,
  author: pj.author,
  copyright: pj.author,
  license: pj.license,
  match: [
    'https://boccaro.notion.site/f47ef8788acb4e12b604011e95fb1738*',
    'https://boccaro.notion.site/25d40a5ff8ad4ac6a0c05b350c0ce90c*',
  ],
  require: ['https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js'],
  resource: [],
  'run-at': 'document-idle',
  supportURL: pj.bugs.url,
  homepage: pj.homepage,
  grant: ['GM_getResourceText', 'GM_addStyle'],
  icon: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-player-stay-home-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
}
