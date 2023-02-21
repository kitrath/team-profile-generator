class Employee {
    constructor(id, name, email) {
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a number")
        }
        if (this.constructor._isInvalidString(name)) {
            throw new Error("Expected parameter 'name' to be a valid string")
        }
        if (this.constructor._isInvalidString(email)) {
            throw new Error("Expected parameter 'email' to be a valid string");
        }
        
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }

    static _isInvalidString(str) {
        return (typeof str !== "string" || !str.trim().length);
    }
}

module.exports = Employee;