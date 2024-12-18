const pj = require('../package.json')
const { resolve } = require('path')

module.exports = (() => {
  const name = '观影体验提升计划-开发版'

  return {
    name,
    namespace: '25d40a5ff8ad4ac6a0c05b350c0ce90c',
    match: ['https://wwpdw.notion.site/*', 'http://localhost:8080'],
    grant: [
      'GM_getValue',
      'GM_setValue',
      'GM_addValueChangeListener',
      'GM_getResourceText',
      'GM_addStyle',
      'GM_registerMenuCommand',
    ],
    require: [`file://${resolve(__dirname, '../dist/dev').replaceAll('\\', '/')}/${name}.script.js`],
  }
})()
