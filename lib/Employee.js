class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName = function () {
        return this.name;
    };

    getRole = function () {
        return 'employee';
    };

    getId = function () {
        return this.id;
    };

    getEmail = function () {
        return this.email;
    };
}

module.exports = Employee;