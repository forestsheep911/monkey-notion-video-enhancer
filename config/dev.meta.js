const pj = require('../package.json')
const { resolve } = require('path')
module.exports = {
  name: `${pj.name}`,
  namespace: `https://github.com/${pj.author}/monkey-${pj.name}`,
  match: [
    'https://boccaro.notion.site/f47ef8788acb4e12b604011e95fb1738*',
    'https://boccaro.notion.site/25d40a5ff8ad4ac6a0c05b350c0ce90c*',
  ],
  grant: ['GM_getValue', 'GM_setValue', 'GM_addValueChangeListener', 'GM_getResourceText', 'GM_addStyle'],
  require: [`file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${pj.name}.script.js`],
}
