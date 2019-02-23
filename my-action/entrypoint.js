const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit()

tools.github.repos
  .getCommit(tools.context.repo(tools.context.sha))
  .then(response => console.log(response))
  .catch(err => console.error(err))
