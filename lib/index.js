const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  recommended: {
    'single file': 'error',
    'standard readme': ['warning', ['slug',,,,, {installable: true}]]
  },
  strict: {
    'single file': 'error',
    'standard readme': ['error', [,,,,, {installable: true, toc: true}]]
  }
}

exports.rules = rules
