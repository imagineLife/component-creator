const { componentTestFileString } = require(".");

describe("componentTestFileString", () => {
  it("works", () => {
    const res = componentTestFileString({ componentName: "Water" });
    const lines = res.split("\n");
    const expectedLines = [
      "import React from 'react';",
      "import { mount } from 'enzyme';",
      "import toJson from 'enzyme-to-json';",
      "import Water from './Water';",
      "",
      "describe('<Water />', () => {",
      "  const wrapper = mount(<Water />);",
      "  it('matches snapshot', () => {",
      "    expect(toJson(wrapper)).toMatchSnapshot();",
      "  });",
      "};",
      "",
    ];
    lines.forEach((l, idx) => expect(l).toBe(expectedLines[idx]));
  });
});
