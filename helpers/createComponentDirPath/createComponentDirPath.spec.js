const { createComponentDirPath } = require(".");

describe("createComponentDirPath", () => {
  const workingArr = [
    {
      comp: "Horse",
      path: "a/dir/here",
      o: "a/dir/here/Horse",
    },
    {
      comp: "Water",
      path: "another/dir/here",
      o: "another/dir/here/Water",
    },
  ];
  describe("succeeds", () => {
    test.each(workingArr)(
      "convert $comp and $path to $o",
      ({ comp, path, o }) => {
        expect(createComponentDirPath({ componentName: comp, cwd: path })).toBe(
          o
        );
      }
    );
  });
});
