const { version } = require('./manifest.json')
const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')

const source = readFileSync(join(__dirname, './css/osgh.css'), 'utf8')
// Stylus requires Semver version
const SemVerVer = `${version}.0`
const style = `
/* ==UserStyle==
@name         Old School GitHub
@version      ${SemVerVer}
@description  Reverts most of GitHub to its classic look
@license      MIT
@author       daattali
@homepageURL  https://github.com/daattali/oldschool-github-extension
@namespace    daattali
==/UserStyle== */

@-moz-document url-prefix("https://github.com/"), url-prefix("https://gist.github.com/") {
  ${source}
}`

writeFileSync(join(__dirname, './css/osgh.user.css'), style)
