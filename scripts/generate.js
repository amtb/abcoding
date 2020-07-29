const fs = require('fs');
const argv = require('yargs').argv;
const kebabCase = require('lodash/kebabCase');
const simpleGit = require('simple-git');
const colors = require('colors/safe');

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
  try {
    await fs.mkdirSync(folderPath);
    console.log(colors.green('✔️  folder created'));

    const files = [
      { path: `${folderPath}/${fileName}.js`, content: tpl.fn },
      { path: `${folderPath}/${fileName}.spec.js`, content: tpl.spec }
    ];

    files.forEach(
      async ({ path, content }) => await fs.writeFileSync(path, content)
    );

    console.log(colors.green('✔️  files generated'));

    const git = simpleGit();
    await git.checkout(['-b', fileName]);
    console.log(colors.green(`✔️  switched to branch ${fileName}`));
  } catch (error) {
    console.log(colors.red('❌  something went wrong'));
    console.error(error);
  }
})();
