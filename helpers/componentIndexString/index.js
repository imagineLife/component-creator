function componentIndexString({ componentName }) {
  return `import React from 'react';
const ${componentName} = () => (<p>${componentName}</p>);
export default ${componentName};
`;
}

module.exports = {
  componentIndexString,
};
