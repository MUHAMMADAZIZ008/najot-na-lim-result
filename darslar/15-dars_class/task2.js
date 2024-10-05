class Person{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
    fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    get firstname() {
        return this.firstname
    }
    get lastname() {
        return this.lastname
    }
    get fullName(){
        return this.firstname
    }

    set newFistName(item){
        this.firstname = item
    }
    set newLastName(item){
        this.lastname = item
    }
}
let user = new Person("muhammdaziz", "gulomov")
console.log(user.firstname);