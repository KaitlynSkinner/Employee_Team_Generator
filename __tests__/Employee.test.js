const Employee = require('../lib/Employee.js');

//jest.mock('../lib/Manager.js');
// fs.readFileSync.mockReturnValue('fake content');

describe('get the information of the team employee', () => {
    test('creates an employee object', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);
    
        expect(employee.name).toBe('Name');
        expect(employee.role).toBe('Role');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toBe('email@email.com');
        expect(employee.phone).toEqual(expect.any(Number));
    });

    test('add employee name', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);
    
        expect(employee.name).toBe('Name');
    });

    test('add employee role', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);
    
        expect(employee.role).toBe('Role');
    });

    test('add employee employee id', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);

        expect(employee.id).toEqual(expect.any(Number));
    });

    test('add employee email', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);
    
        expect(employee.email).toBe('email@email.com');
    });

    test('add work phone number', () => {
        const employee = new Employee('Name', 'Role', 1, 'email@email.com', 1234567);
    
        expect(employee.phone).toEqual(expect.any(Number));
    });
});