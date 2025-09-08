/**
 * @filename: lint-staged.config.mjs
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "*.{js,mjs,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "!(*.js|*.mjs|*.jsx|*.ts|*.tsx)": ["prettier --write"],
};

export default config;
