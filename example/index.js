const path = require('path')
const fs = require('fs')
const util = require('util')
const fromTemplate = require('builder-t')

const write = util.promisify(fs.writeFile)

const test = async () => {
  const result = await fromTemplate({
    from: path.join(__dirname, 'template.html'),
    values: {
      title: 'hello world',
      string: 'hello jhon',
    },
  })

  write(path.join(__dirname, 'result.html'), result)
}

test()
