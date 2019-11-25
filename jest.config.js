module.exports = {
  testEnvironment: 'node',

  moduleFileExtensions: [
    "js",

  ],
  testRegex: '(/__tests__/.*|(\\.|/)test)\\.jsx?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
};
