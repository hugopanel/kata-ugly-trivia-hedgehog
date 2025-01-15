import { expect, jest, test } from "@jest/globals";

import { GameRunner } from "../game-runner";
import assert from "node:assert";
import fs from "node:fs";

test("should do something", () => {
  // Create Math.random function mock
  let seed = 1;
  function mockRandom() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  // Read actual output
  let calls: string[] = [];
  const logSpy = jest.spyOn(console, "log").mockImplementation((message) => {
    calls.push(message);
  });

  // Call game runner
  GameRunner.main(mockRandom);

  const expectedPath = "tests/game-runner-expected-output.txt";

  // Write logSpy output to file to create expected output file.
  // fs.writeFileSync(
  //   expectedPath,
  //   // logSpy.mock.calls.map((call) => call[0]).join("\n")
  //   calls.join("\n")
  // );

  console.warn(calls.join("\n"));

  expect(calls).toEqual(fs.readFileSync(expectedPath).toString().split("\n"));
  assert(true);
});
