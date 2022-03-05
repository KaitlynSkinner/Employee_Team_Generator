const Intern = require('../lib/Intern.js');

//jest.mock('../lib/Manager.js');
// fs.readFileSync.mockReturnValue('fake content');

describe('get the information of the team intern', () => {
    test('creates an intern object', () => {
        const intern = new Intern('Name', 1, 'email@email.com', 'School');
    
        expect(intern.name).toBe('Name');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toBe('email@email.com');
        expect(intern.school).toBe('School');
    });

    test('add intern name', () => {
        const intern = new Intern('Name', 1, 'email@email.com', 'School');
    
        expect(intern.name).toBe('Name');
    });

    test("add intern's employee id", () => {
        const intern = new Intern('Name', 1, 'email@email.com', 'School');

        expect(intern.id).toEqual(expect.any(Number));
    });

    test("add intern's email", () => {
        const intern = new Intern('Name', 1, 'email@email.com', 'School');
    
        expect(intern.email).toBe('email@email.com');
    });

    test('add the name of the school the intern attended', () => {
        const intern = new Intern('Name', 1, 'email@email.com', 'School');
    
        expect(intern.school).toBe('School');
    });
});