import Service from "./service.js";



describe("First test", () => {
  it("should return 'Hello World!'", () => {
    const service = new Service();
    const result = service.helloWorld();

    expect(result).toBe("Hello World!");
  });
});
