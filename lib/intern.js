const employee = require("./employee");

class intern extends employee {
    constructor(name, role, id, email, school) {
        super(name, role, id, email);
        this.school = school;
    }
    getSchool() {

        return this.school;
    }

    getRole() {

        return "intern";
    }
}

module.exports = intern;