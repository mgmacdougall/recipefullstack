const config = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
  ],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default config;