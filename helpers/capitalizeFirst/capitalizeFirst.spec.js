const { capitalizeFirst } = require(".");

describe("capitalizeFirst", () => {
  const workingArr = [
    {
      i: "water",
      o: "Water",
    },
    {
      i: "aLongerCamelCaseString",
      o: "ALongerCamelCaseString",
    },
  ];
  describe("succeeds", () => {
    test.each(workingArr)("convert $i to $o", ({ i, o }) => {
      expect(capitalizeFirst(i)).toBe(o);
    });
  });
});
