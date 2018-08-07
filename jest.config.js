module.exports = {
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'containers/**/*.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98
    }
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/testing/css-module-mock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testing/image-mock.js'
  },
  setupFiles: ['<rootDir>/testing/enzyme-setup.js'],
  testRegex: 'tests/.*\\.test\\.jsx?$',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
