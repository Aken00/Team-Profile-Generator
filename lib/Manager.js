const Employee = require("./Employee");

class Manager {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        super.role = "Manager";

    }

    getOfficeNum() {
        return this.officeNum;
    }

}

module.exports = Manager;