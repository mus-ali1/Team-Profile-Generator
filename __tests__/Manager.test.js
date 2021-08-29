const Manager = require('../lib/manager');

//name, email, id, role and school  name validation for manager
const managerTest = new Manager('mustafa', 1, "mustafamire@gmail.com", 101, "manager")

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
        var keys = Object.keys(managerTest)
        var optionKey = keys[3]
        expect(optionKey).toBe('officeNumber')
        expect(managerTest.officeNumber).toEqual(expect.any(Number))
    })
    it('has a role of engineer', () => {
        expect(managerTest.getRole()).toBe('manager')
    }
    )
})