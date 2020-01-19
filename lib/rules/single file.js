const {readdir} = require('fs').promises


const REGEXP = /^READ([-_ ]?)ME/i
const filter = REGEXP.test.bind(REGEXP)


exports.fetch = function({context: {projectRoot}})
{
  return readdir(projectRoot)
}

exports.evaluate = function({fetch: {result}})
{
  return result.filter(filter).length !== 1
}
