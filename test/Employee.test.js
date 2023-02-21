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
    
        const idError = new Error("Expected parameter 'id' to be a number");

        it("should throw an error if id is not a number", () => {

            const nanId = () => {
                new Employee("12", "Joe", "joe@example.com");
            };

            expect(nanId).toThrowError(idError);
        });

        it("should throw an error if id is negative", () => {

            const negId = () => {
                new Employee(-22, "Joe", "joe@example.com");
            };

            expect(negId).toThrowError(idError);
        });

        const nameError = new Error("Expected parameter 'name' to be a valid string");

        it("should throw an error if name is not a string", () => {
            const badName = () => {
                new Employee(12, 12, "joe@example.com");
            };

            expect(badName).toThrowError(nameError);
        });

        it("should throw and error if name is an empty string", () => {
            const noName = () => {
                new Employee(12, "", "joe@example.com");
            };

            expect(noName).toThrowError(nameError);
        });

        const emailError = new Error("Expected parameter 'email' to be a valid string");

        it("should throw an error if email argument is not provided", () => {
            const noEmail = () => {
                new Employee(10, "Joe");
            };

            expect(noEmail).toThrowError(emailError);
        });
        
        it("should throw an error if email is not a string", () => {
            const badEmail = () => {
                new Employee(12, "Joe", 21);
            };

            expect(badEmail).toThrowError(emailError);
        });

        it("should throw an error if email is empty string", () => {
            const emptyEmail = () => {
                new Employee(12, "Joe", "");
            };

            expect(emptyEmail).toThrowError(emailError);
        });
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const employee = new Employee(43, "Sagaar", "senjeti@gmail.com");

            expect(employee.getRole()).toBe('Employee');
        });
    });
});