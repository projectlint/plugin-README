const { resolve } = require("path");

const { evaluate, fetch } = require("../../lib/rules/single file");

test("evaluate", function() {
  const result = evaluate(null, null, null, []);

  expect(result).toMatchInlineSnapshot(`false`);
});

test("fetch", function() {
  return fetch({ projectRoot: resolve(__dirname, "../..") }).then(function(
    result
  ) {
    expect(result).toMatchInlineSnapshot(`
      Array [
        ".git",
        ".gitignore",
        "LICENSE",
        "README.md",
        "__tests__",
        "coverage",
        "lib",
        "node_modules",
        "package.json",
      ]
    `);
  });
});
