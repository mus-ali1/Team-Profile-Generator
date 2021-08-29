const Manager = require('../lib/manager');

//name, email, id, role and school  name validation for manager
const managerTest = new Manager('mustafa', 1, "mustafamire@gmail.com", 'Manager', 101)

describe('Manager', () => {
    it('has a name', () => {
        expect(managerTest.name).toEqual(expect.any(String))
        expect(managerTest.name.length).toBeGreaterThan(2)
    })
    it('has an id that is a num', () => {
        expect(managerTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(managerTest.email).toEqual(expect.stringContaining('@'))
    })
    it('has an office number', () => {
        keys = Object.keys(managerTest)
        optionKey = keys[4]
        expect(optionKey).toBe('office')
        expect(managerTest.office).toEqual(expect.any(Number))
    })
    it('has a role of engineer', () => {
        expect(managerTest.getRole()).toBe('Manager')
    }
    )
})