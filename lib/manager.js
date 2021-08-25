const Employee = require("./employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {

        return this.officeNumber;
    }

    getRole() {

        return "manager";
    }
}

module.exports = manager;