module.exports = function(wallaby) {
  return {
    files: [{ pattern: 'src/**/*.js' }, { pattern: 'src/__test__/**/*.*', ignore: true }],

    tests: ['src/__test__/**/*test.js', 'src/__test__/**/*spec.js'],

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
  };
};
