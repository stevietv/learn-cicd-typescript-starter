import { describe, expect, test } from "vitest";

import { getAPIKey } from "../api/auth.js";

const headers = {
  authorization: "ApiKey 123456",
};

describe("valid key", () => {
  test("key is found", () => {
    const apikey = getAPIKey(headers);
    expect(apikey).toBe("12345");
  });

  test("no header should be null", () => {
    const apikey = getAPIKey({});
    expect(apikey).toBeNull();
  })

  test("malformed header should be null", () => {
    const apikey = getAPIKey({
      authorization: "ApiKey123"
    });
    expect(apikey).toBeNull();
  })

  
  test("malformed header should be null", () => {
    const apikey = getAPIKey({
      authorization: "Key 123"
    });
    expect(apikey).toBeNull();
  })
});