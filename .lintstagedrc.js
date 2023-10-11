const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,ts,tsx}': [buildEslintCommand, 'prettier --write'],
  // huskyからtscを実行すると、tsconfigファイルが検知されずエラーになるため、bashを通してtscを実行している
  // パッケージマネージャによってコマンド変更する必要あり
  '*.{ts,tsx}': ["bash -c 'pnpm check-types'"],
};
