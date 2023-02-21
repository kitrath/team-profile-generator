const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an intern with id, name, email, and school provided valid inputs", () => {
            const intern = new Intern(22, "Jodi", "jodi@pennstate.edu", "Penn State");

            expect(intern.id).toBe(22);
            expect(intern.name).toBe("Jodi");
            expect(intern.email).toBe("jodi@pennstate.edu");
            expect(intern.school).toBe("Penn State");
        });
    });
});