const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: `${pj.name}`,
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`,
  match: ['https://boccaro.notion.site/*', 'http://localhost:8080'],
  grant: [
    'GM_getValue',
    'GM_setValue',
    'GM_addValueChangeListener',
    'GM_getResourceText',
    'GM_addStyle',
    'GM_registerMenuCommand',
  ],
  require: [`file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`],
}
