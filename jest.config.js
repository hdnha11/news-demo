module.exports = {
  testURL: 'http://localhost',
  collectCoverageFrom: [
    'components/**/*.{js,jsx}',
    'containers/**/*.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/testing/css-module-mock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/testing/image-mock.js'
  },
  setupFiles: ['<rootDir>/testing/jest-setup.js'],
  testRegex: 'tests/.*\\.test\\.jsx?$',
  snapshotSerializers: ['enzyme-to-json/serializer']
};
