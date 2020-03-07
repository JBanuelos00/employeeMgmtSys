// TODO: Write code to define and export the Employee class
// Parent class with following properties: name, id, email, getName(), getId(), getEmail(), getRole() which returns Employee
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail(){
        return this.email;

    }
    getRole(){
        return this.role = "Employee";
    }
}

module.exports = Employee;