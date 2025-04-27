/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
module.exports = {
  mutate: ['commentController.js'],
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    enableFindRelatedTests: true
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'perTest',
  
};

