test("smoke", function() {
  const result = require("..");

  expect(result).toMatchInlineSnapshot(`
    Object {
      "config": Object {
        "recommended": Object {
          "single file": "error",
          "standard readme": Array [
            "warning",
            Array [
              "slug",
              undefined,
              undefined,
              undefined,
              undefined,
              Object {
                "installable": true,
              },
            ],
          ],
        },
        "strict": Object {
          "single file": "error",
          "standard readme": Array [
            "error",
            Array [
              undefined,
              undefined,
              undefined,
              undefined,
              undefined,
              Object {
                "installable": true,
                "toc": true,
              },
            ],
          ],
        },
      },
      "rules": Object {
        "single file": Object {
          "evaluate": [Function],
          "fetch": [Function],
        },
        "standard readme": Object {
          "evaluate": [Function],
          "fetch": [Function],
        },
      },
    }
  `);
});
