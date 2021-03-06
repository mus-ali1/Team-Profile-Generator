const Intern = require("../lib/intern");

//name, email, id, role and school  name validation for intern 
const internTest = new Intern("mustafa", 3, "mustafamire@gmail.com", "Heights School", 'engineer')

describe('Intern', () => {
    it('has a name', () => {
        expect(internTest.name).toEqual(expect.any(String))
        expect(internTest.name.length).toBeGreaterThan(2)

    })
    it('has an id that is a num', () => {
        expect(internTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(internTest.email).toEqual(expect.stringContaining('@'))

    })
    it('has a school name', () => {
        var keys = Object.keys(internTest)
        var optionKey = keys[3]
        console.log("Keys = ", keys)
        expect(optionKey).toBe("School")
        expect(internTest.School).toEqual(expect.any(String))
    })
    it('has a role of engineer', () => {
        expect(internTest.getRole()).toBe('intern')
    }
    )
})

