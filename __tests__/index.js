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
            ],
          ],
        },
        "strict": Object {
          "single file": "error",
          "standard readme": "error",
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
