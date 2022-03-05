const Manager = require('../lib/Manager.js');

describe('get the information of the team manager', () => {
    test('creates a manager object', () => {
        const manager = new Manager('Name', 1, 'email@email.com', 1234567);
    
        expect(manager.name).toBe('Name');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toBe('email@email.com');
        expect(manager.phone).toEqual(expect.any(Number));
    });

    test("add manager's name", () => {
        const manager = new Manager('Name', 1, 'email@email.com', 1234567);
    
        expect(manager.name).toBe('Name');
    });

    test("add manager's employee id", () => {
        const manager = new Manager('Name', 1, 'email@email.com', 1234567);

        expect(manager.id).toEqual(expect.any(Number));
    });

    test("add manager's email", () => {
        const manager = new Manager('Name', 1, 'email@email.com', 1234567);
    
        expect(manager.email).toBe('email@email.com');
    });

    test('add work phone number', () => {
        const manager = new Manager('Name', 1, 'email@email.com', 1234567);
    
        expect(manager.phone).toEqual(expect.any(Number));
    });
});