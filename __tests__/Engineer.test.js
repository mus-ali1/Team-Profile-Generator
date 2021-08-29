const Engineer = require('../lib/Engineer');

//name, email, id, role and github user name validation for Engineer

const engineerTest = new Engineer('Mustafa', 2, 'mustafamire@gmail.com', 'https://github.com/mus-ali1', "engineer")

describe("Engineer", () => {
    it('has a name', () => {
        expect(engineerTest.name).toEqual(expect.any(String))
        expect(engineerTest.name.length).toBeGreaterThan(2)

    })
    it('has an id that is a num', () => {
        expect(engineerTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(engineerTest.email).toEqual(expect.stringContaining('@'))
    }
    )
    it('has a github username', () => {
        var keys = Object.keys(engineerTest)
        var optionKey = keys[3]
        expect(optionKey).toBe('github')
        expect(engineerTest.github).toEqual(expect.any(String))

    })

    it('has a role of engineer', () => {
        expect(engineerTest.getRole()).toBe('engineer')
    })


})

