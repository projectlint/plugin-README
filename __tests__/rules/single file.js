const { resolve } = require("path");

const { evaluate, fetch } = require("../../lib/rules/single file");

test("evaluate", function() {
  const result = evaluate({fetch: { result: []}});

  expect(result).toBeTruthy();
});

test("fetch", function() {
  return fetch({context: { projectRoot: resolve(__dirname, "../..") }}).then(function(
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
