const { Toolkit } = require('actions-toolkit')
const tools = new Toolkit()

tools.github.repos
  .getCommit(tools.context.repo({ sha: tools.context.sha }))
  .then(response => {
    console.log(response.data.files)
  })
  .catch(err => console.error(err))
