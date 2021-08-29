const employee = require("./employee");

class manager extends employee {
    constructor(name, role, id, email, officeNumber) {
        super(name, role, id, email);
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