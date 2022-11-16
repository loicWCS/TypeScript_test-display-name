import getDisplayName from "./getDisplayName";

describe("getDisplayName", () => {
  describe("when no specified city", () => {
    it("returns question mark and full name", () => {
      expect(getDisplayName("Jane", "Doe")).toBe("[?] Jane Doe");
    });
  });
  describe("when specified city", () => {
    it("returns city and full name", () => {
      expect(getDisplayName("John", "Doe", "Paris")).toBe("[Paris] John Doe");
    });
  });

  describe("when specified workstudy", () => {
    it("return if workstudy is specified", () => {
      expect(getDisplayName("John", "Doe", "Paris", "workstudy")).toBe(
        "[Paris] John Doe - WnS"
      );
    });
  });
  describe("when no specified workstudy", () => {
    it("return no workstudy", () => {
      expect(getDisplayName("John", "Doe", "Paris", "notWorkstudy")).toBe(
        "[Paris] John Doe"
      );
    });
  });
});
