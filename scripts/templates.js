/**
 * yeoman v -1
 */
module.exports = function (fnName, fileName) {
  const fn = `
  var ${fnName} = function() {
    // ppap
  };

  export default ${fnName};
  `;
  const spec = `
  import ${fnName} from './${fileName}';

  it('${fnName}', () => {

  });
  `;

  return { spec, fn };
};
