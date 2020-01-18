const { resolve } = require("path");

const { evaluate, fetch } = require("../../lib/rules/standard readme");

const projectRoot = resolve(__dirname, "../..");

test("evaluate", function() {
  const result = evaluate({fetch: {result: { messages: [] }}});

  expect(result).toBeFalsy();
});

describe("fetch", function() {
  test("default (exact)", function() {
    return fetch({context: { projectRoot }}).then(function(result) {
      expect(result).toMatchInlineSnapshot(`
        VFile {
          "contents": "# Plugin README

        README files plugin for projectlint, a style checker and lint tool for (Node.js) projects

        <https://www.npmjs.com/package/depcheck>

        gitleaks

        ## Contributing

        ## License

        MIT
        ",
          "cwd": "${projectRoot}",
          "data": Object {},
          "history": Array [
            "${projectRoot}/README.md",
          ],
          "messages": Array [
            [${projectRoot}/README.md:1:1-1:16: Heading 'plugin readme' is not the directory name],
          ],
        }
      `);
    });
  });

  test("null option", function() {
    return fetch({context: { projectRoot }, config: [null]}).then(function(result) {
      expect(result).toMatchInlineSnapshot(`
        VFile {
          "contents": "# Plugin README

        README files plugin for projectlint, a style checker and lint tool for (Node.js) projects

        ## Contributing

        ## License

        MIT
        ",
          "cwd": "${projectRoot}",
          "data": Object {},
          "history": Array [
            "${projectRoot}/README.md",
          ],
          "messages": Array [
            [${projectRoot}/README.md:1:1-1:16: Heading 'plugin readme' is not the directory name],
          ],
        }
      `);
    });
  });

  test("slug", function() {
    return fetch({context: { projectRoot }, config: ["slug"]}).then(function(result) {
      expect(result).toMatchInlineSnapshot(`
        VFile {
          "contents": "# Plugin README

        README files plugin for projectlint, a style checker and lint tool for (Node.js) projects

        <https://www.npmjs.com/package/depcheck>

        gitleaks

        ## Contributing

        ## License

        MIT
        ",
          "cwd": "${projectRoot}",
          "data": Object {},
          "history": Array [
            "${projectRoot}/README.md",
          ],
          "messages": Array [],
        }
      `);
    });
  });
});
