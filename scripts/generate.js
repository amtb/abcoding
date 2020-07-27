const fs = require('fs');
const argv = require('yargs').argv;
const kebabCase = require('lodash/kebabCase');
const simpleGit = require('simple-git');
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

  const files = [
    { path: `${folderPath}/${fileName}.js`, content: tpl.fn },
    { path: `${folderPath}/${fileName}.spec.js`, content: tpl.spec }
  ];

  files.forEach(
    async ({ path, content }) => await fs.writeFileSync(path, content)
  );

  const git = simpleGit();
  await git.checkout(['-b', fileName]);
})();
