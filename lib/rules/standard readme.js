const {readFile} = require('fs').promises
const {join} = require('path')

const remark = require('remark')
const {plugins} = require('standard-readme-preset')
const {read} = require('to-vfile')


exports.fetch = function({config, context: {projectRoot}})
{
  if(Array.isArray(config))
    for(const index in config)
    {
      const option = config[index]

      if(option != null) plugins[index] = [plugins[index], option]
    }

  const processor = remark().use(plugins)

  // TODO: get file without extension, left to plugin to check it
  return read(join(projectRoot, 'README.md')).then(processor.process.bind(processor))
}

exports.evaluate = function({fetch: {result: {messages: {length}}}})
{
  return length
}
