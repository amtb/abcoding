const fs = require('fs');
const argv = require('yargs').argv;
const kebabCase = require('lodash/kebabCase');
const templates = require('./templates');

const problem = argv.p;
const fn = argv.f;

const folder = problem
  .toLowerCase()
  .replace(/[^\s\w]/g, '')
  .replace(/\s/g, '-');
const folderPath = `src/leetcode/${folder}`;
const fileName = kebabCase(fn);
const tpl = templates(fn, fileName);

(async () => {
  await fs.mkdirSync(folderPath);
  await fs.writeFileSync(`${folderPath}/${fileName}.js`, tpl.fn);
  await fs.writeFileSync(`${folderPath}/${fileName}.spec.js`, tpl.spec);
})();
