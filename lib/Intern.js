const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);

        if (Employee._isInvalidString(school)) {
            throw new Error("Expected parameter 'school' to be a valid string");
        }

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;