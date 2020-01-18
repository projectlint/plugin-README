const {readdir} = require('fs').promises


const REGEXP = /^READ([-_ ]?)ME/i
const filter = REGEXP.test.bind(REGEXP)


exports.fetch = function({projectRoot})
{
  return readdir(projectRoot)
}

exports.evaluate = function(context, dependencies, options, files)
{
  return files.filter(filter).length === 1
}
