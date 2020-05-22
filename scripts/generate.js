const fs = require('fs');
const argv = require('yargs').argv;
const kebabCase = require('lodash/kebabCase');

const problem = argv.p;
const fn = argv.f;

const folder = problem
  .toLowerCase()
  .replace(/[^\s\w]/g, '')
  .replace(/\s/g, '-');
const folderPath = `src/leetcode/${folder}`;
const fileName = kebabCase(fn);

(async () => {
  await fs.mkdirSync(folderPath);
  await fs.writeFileSync(`${folderPath}/${fileName}.js`);
  await fs.writeFileSync(`${folderPath}/${fileName}.spec.js`);
})();
