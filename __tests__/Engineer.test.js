const Engineer = require('../lib/Engineer.js');

describe('get the information of the team engineer', () => {
    test('creates an engineer object', () => {
        const engineer = new Engineer('Name', 1, 'email@email.com', 'github');
    
        expect(engineer.name).toBe('Name');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toBe('email@email.com');
        expect(engineer.github).toBe('github');
    });

    test('add engineer name', () => {
        const engineer = new Engineer('Name', 1, 'email@email.com', 'github');
    
        expect(engineer.name).toBe('Name');
    });

    test("add engineer's employee id", () => {
        const engineer = new Engineer('Name', 1, 'email@email.com', 'github');

        expect(engineer.id).toEqual(expect.any(Number));
    });

    test("add engineer's email", () => {
        const engineer = new Engineer('Name', 1, 'email@email.com', 'github');
    
        expect(engineer.email).toBe('email@email.com');
    });

    test("add the engineer's GitHub username", () => {
        const engineer = new Engineer('Name', 1, 'email@email.com', 'github');
    
        expect(engineer.github).toBe('github');
    });
});