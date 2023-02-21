const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        
        const noGithubError = new Error("Expected paramter 'github' to be a valid string");

        it("should create an Engineer with id, name, email, and github provided valid arguments", () => {
            const dev = new Engineer(42, "Mark", "mark@protonmail.com", "marker85");

            expect(dev.id).toBe(42);
            expect(dev.name).toBe("Mark");
            expect(dev.email).toBe("mark@protonmail.com");
            expect(dev.github).toBe("marker85");
        });

        it("should throw an error if no github argument is given", () => {
            const noGithub = () => {
                new Engineer(67, "Aarthi", "aarthi@gmail.com");
            };
            expect(noGithub).toThrowError(noGithubError);
        });

        it("should throw an error if github argument is an empty string", () => {
            const emptyGithub = () => {
                new Engineer(23, "Sriram", "sriram@twinmail.com", "");
            };
            expect(emptyGithub).toThrowError(noGithubError);
        });
    });

    describe("getGithub", () => {
        it("should return engineer's github property", () => {
            const dev = new Engineer(78, "Marshall", "mkosoff@yahoo.com", "mkosoff");

            expect(dev.getGithub()).toBe("mkosoff");
        });
    });

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const dev = new Engineer(11, "Mark", "mark@protonmail.com", "marker85");
            
            expect(dev.getRole()).toBe('Engineer');
        });
    });
});
