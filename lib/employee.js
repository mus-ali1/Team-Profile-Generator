class employee {

    constructor(name, role, id, email) {



        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }


    getname() {
        return this.name;


    }

    getid() {

        return this.id;
    }

    getEmail() {

        return this.email;
    }

    getRole() {
        return "Employee";
    }

}


module.exports = employee;
