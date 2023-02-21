const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {

        const noSchoolError = new Error("Expected parameter 'school' to be a valid string");

        it("should create an Intern with id, name, email, and school provided valid inputs", () => {
            const intern = new Intern(22, "Jodi", "jodi@pennstate.edu", "Penn State");

            expect(intern.id).toBe(22);
            expect(intern.name).toBe("Jodi");
            expect(intern.email).toBe("jodi@pennstate.edu");
            expect(intern.school).toBe("Penn State");
        });

        it("should throw an error if no school argument is given", () => {
            const noSchool = () => {
                new Intern(1, "Jacob", "jake@example.com");
            };
            
            expect(noSchool).toThrowError(noSchoolError);
        });

        it("should throw an error if an empty string is passed for school", () => {
            const emptySchool = () => { new Intern(2, "Jane", "jane@example.com", "")}

            expect(emptySchool).toThrowError(noSchoolError);
        })
    });
    
    describe("getSchool", () => {
        it("should return the intern's school prop value", () => {
            const intern = new Intern(11, "Pravi", "pravi@okstate.edu", "Oklahoma State University");

            expect(intern.getSchool()).toBe("Oklahoma State University");
        });
    });

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern(3, "Jessie", "jessie@example.com", "Georgia Tech");

            expect(intern.getRole()).toBe('Intern');
        });
    });
});