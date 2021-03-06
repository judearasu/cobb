'use strict'

// Object spread is just node 8
// eslint-disable-next-line compat/compat
module.exports = Object.assign({}, require('./jest.config'), {
  coverageReporters: ['json'],
  reporters: [
    ['jest-junit', { output: 'reports/junit/js-test-results.xml' }],
    ['jest-silent-reporter', { useDots: true }]
  ]
})
