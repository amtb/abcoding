const fs = require('fs');
const mustache = require('mustache');
const argv = require('yargs').argv;
const kebabCase = require('lodash/kebabCase');
const simpleGit = require('simple-git');
const colors = require('colors/safe');

// read argument from cli
const problem = argv.p;
const fnName = argv.f;

const folder = problem
  .toLowerCase()
  .replace(/[^\s\w]/g, '')
  .replace(/\s/g, '-');

const folderPath = `src/leetcode/${folder}`;
const fileName = kebabCase(fnName);

(async () => {
  try {
    await fs.mkdirSync(folderPath);
    console.log(colors.green('✔️  folder created'));

    const functionTemplate = await fs.readFileSync(
      'templates/function.mustache',
      'utf-8'
    );
    const specTemplate = await fs.readFileSync(
      'templates/spec.mustache',
      'utf-8'
    );

    const files = [
      {
        path: `${folderPath}/${fileName}.js`,
        content: mustache.render(functionTemplate, { fnName })
      },
      {
        path: `${folderPath}/${fileName}.spec.js`,
        content: mustache.render(specTemplate, { fnName, fileName })
      }
    ];

    files.forEach(
      async ({ path, content }) => await fs.writeFileSync(path, content)
    );

    console.log(colors.green('✔️  files generated'));

    const git = simpleGit();
    const currentBranch = await git.branch(['--show-current']);
    if (currentBranch !== 'master') {
      console.warn(colors.yellow('You are not on the main branch !'));
    } else {
      await git.checkout(['-b', fileName]);
      console.info(colors.green(`✔️  switched to branch ${fileName}`));
    }
  } catch (error) {
    console.info(colors.red('❌  something went wrong'));
    console.error(error);
  }
})();
