const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {

        const noOfficeNumberError = new Error("Expected parameter 'officeNumber'");

        it("should create a manager with id, name, email, and officeNumber provided valid arguments", () => {
            const manager = new Manager(22, "Janice", "janice@example.com", "14B");

            expect(manager.id).toBe(22);
            expect(manager.name).toBe("Janice");
            expect(manager.email).toBe("janice@example.com");
            expect(manager.officeNumber).toBe("14B");
        });

        it("should throw an error if no officeNumber parameter is given", () => {
            const noOfficeNum = () => {
                new Manager(12, "Tom", "tsmith76@aol.com");
            };

            expect(noOfficeNum).toThrowError(noOfficeNumberError);
        });
    });

    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const manager = new Manager(24, "Jackson", "jackson@gmail.com", "18E");

            expect(manager.getRole()).toBe('Manager');
        });
    });
});