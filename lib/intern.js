const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, School) {
        super(name, id, email);
        this.School = School;
    }
    getSchool() {

        return this.School;
    }

    getRole() {

        return "intern";
    }
}

module.exports = intern;