function componentTestFileString({ componentName }) {
  return `import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ${componentName} from './${componentName}';

describe('<${componentName} />', () => {
  const wrapper = mount(<${componentName} />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
};
`;
}

module.exports = {
  componentTestFileString,
};
