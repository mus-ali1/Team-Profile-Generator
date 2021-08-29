const Employee = require('../lib/employee');

//name,email,id,role validation

const employeeTest = new Employee("John", 3, "John.Simpson90@gmail.com", "Employee");


describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
        expect(employeeTest.name.length).toBeGreaterThan(2)
    })

    it('has an id that is a num', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })
    it('has an email id', () => {
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('has a role of employee', () => {
        expect(employeeTest.getRole()).toBe('Employee')
    })

})