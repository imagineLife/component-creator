const { componentIndexString } = require(".");

describe("componentIndexString", () => {
  it("works", () => {
    const res = componentIndexString({ componentName: "Water" });
    const lines = res.split("\n");
    const expectedLines = [
      "import React from 'react';",
      "const Water = () => (<p>Water</p>);",
      "export default Water;",
    ];
    expect(lines[0]).toBe(expectedLines[0]);
    expect(lines[1]).toBe(expectedLines[1]);
    expect(lines[2]).toBe(expectedLines[2]);
  });
});
