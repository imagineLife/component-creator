const { join } = require("path");

function createComponentDirPath({ componentName, cwd }) {
  return join(cwd, componentName);
}

module.exports = {
  createComponentDirPath,
};
