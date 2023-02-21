const Employee = require("../lib/Employee");

describe("Employee", () => {

    describe("Initialization", () => {
        it("should create an Employee with an id, name, and email provided valid arguments", () => {
            const employee = new Employee(14, "Joe", "joseph@example.com");
            
            expect(employee.id).toEqual(14);
            expect(employee.name).toEqual("Joe");
            expect(employee.email).toEqual("joseph@example.com");
        });

        it("should throw an error if provided no arguments", () => {
            const empty = () => new Employee();

            expect(empty).toThrow();
        });
    });
});