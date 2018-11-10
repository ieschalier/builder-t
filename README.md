# builder-t 👷‍♂️

Usefull to generate html string representation from template. Or anything else

## Prerequisites

node 8 for `util.promisify`

## Install

```bash
yarn add template-builder
```

## [Example](./example)

```js
const fromTemplate = require('../index')

const result = await fromTemplate({
  from: path.join(__dirname, 'template.html'),
  values: {
    title: 'hello world',
    string: 'hello jhon',
  },
})
```
