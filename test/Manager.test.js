const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a manager with id, name, email, and officeNumber provided valid arguments", () => {
            const manager = new Manager(22, "Janice", "janice@example.com", "14B");

            expect(manager.id).toBe(22);
            expect(manager.name).toBe("Janice");
            expect(manager.email).toBe("janice@example.com");
            expect(manager.officeNumber).toBe("14B");
        });
    });
});