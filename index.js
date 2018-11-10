const fs = require('fs')
const path = require('path')
const util = require('util')

const read = util.promisify(fs.readFile)

module.exports = async ({ from, values }) => {
  const file = await read(from)

  const template = file.toString('utf8')
  const result = Object.keys(values).reduce((r, key) => (
    r.replace(new RegExp(`%${key}`, 'gm'), values[key])
  ), template)

  return result
}
