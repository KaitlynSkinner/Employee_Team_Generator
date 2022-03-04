const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }

    getRole = function () {
        return 'manager';
    };

    officeNumber = function () {
        return this.phone;
    };
}

module.exports = Manager;