const Jasmine = require('jasmine')
const path = require('path')

const jasmine = new Jasmine({
  projectBaseDir: path.resolve(__dirname, '..')
})

jasmine.loadConfig({
  spec_dir: 'test',
  spec_files: [
    'spec.js'
  ]
})

jasmine.execute()