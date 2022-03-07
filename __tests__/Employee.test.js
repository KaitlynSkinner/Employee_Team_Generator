const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Manager.js');
// fs.readFileSync.mockReturnValue('fake content');

describe('get the information of the team employee', () => {
    test('creates an employee object', () => {
        const employee = new Employee('Name', 1, 'email@email.com');
    
        expect(employee.name).toBe('Name');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toBe('email@email.com');
    });

    test('get employee name', () => {
        const employee = new Employee('Name', 1, 'email@email.com');
    
        expect(employee.name).toBe('Name');
    });

    test('get employee employee id', () => {
        const employee = new Employee('Name', 1, 'email@email.com');

        expect(employee.id).toEqual(expect.any(Number));
    });

    test('get employee email', () => {
        const employee = new Employee('Name', 1, 'email@email.com');
    
        expect(employee.email).toBe('email@email.com');
    });

    test('get employee role', () => {
        const employee = new Employee('Name', 1, "email@email.com");

        expect(employee.getRole()).toEqual('employee');
    });
});