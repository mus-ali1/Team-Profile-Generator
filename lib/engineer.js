const employee = require("./employee");

class engineer extends employee {
    constructor(name, role, id, email, github) {
        super(name, role, id, email);
        this.github = github;
    }
    getGithub() {

        return this.github;
    }

    getRole() {

        return "engineer";
    }
}

module.exports = engineer;