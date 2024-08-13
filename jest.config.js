module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', 'src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
