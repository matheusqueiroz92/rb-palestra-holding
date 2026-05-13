import { describe, expect, it } from "vitest";
import { getTicketPurchaseUrl } from "./env";

describe("getTicketPurchaseUrl", () => {
  it("returns a string (empty when unset in test env)", () => {
    expect(typeof getTicketPurchaseUrl()).toBe("string");
  });
});
