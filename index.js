const { Toolkit } = require('actions-toolkit')

const tools = new Toolkit({ event: 'push' })

const { action, actor, event } = tools.context

console.log({ action, actor, event })
