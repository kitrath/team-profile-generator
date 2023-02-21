const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Engineer with id, name, email, and github provided valid arguments", () => {
            const dev = new Engineer(42, "Mark", "mark@protonmail.com", "marker85");

            expect(dev.id).toBe(42);
            expect(dev.name).toBe("Mark");
            expect(dev.email).toBe("mark@protonmail.com");
            expect(dev.github).toBe("marker85");
        });
    });
});