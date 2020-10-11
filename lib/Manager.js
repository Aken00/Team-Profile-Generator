class Manager {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
        this.role = "Manager";

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;