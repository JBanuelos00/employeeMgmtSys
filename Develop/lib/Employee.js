// TODO: Write code to define and export the Employee class
// Parent class with following properties: name, id, email, getName(), getId(), getEmail(), getRole() which returns Employee
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(data) {

    }

    getId(data) {

    }

    getEmail(data){

    }
    getRole(data){
        return this.role = "Employee"
    }
}

moduel.exports = Employee;