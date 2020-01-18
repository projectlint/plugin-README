const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  recommended: {
    'single file': 'error',
    'standard readme': ['warning', ['slug']]
  },
  strict: {
    'single file': 'error',
    'standard readme': 'error'
  }
}

exports.rules = rules
