/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        addReleases: true,
        assets: [
          {path: 'dist/index.js', label: 'Distribution'},
          {path: 'dist/licenses.txt', label: 'Licenses'},
        ],
      },
    ],
  ],
};
