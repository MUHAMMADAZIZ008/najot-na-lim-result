class Employess{
    #email
    constructor(firstName, lastName, age, email){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.#email = email
    }
    toString(){
        return `
            Full name: ${this.firstName} ${this.lastName}\n
            age: ${this.age}\n
            email: ${this.#email}
        `
    }
    static getInfo(){
        console.log(Employess);
    }
}
let e = new Employess("Muhammadaziz", "Gulomov", 14,"m@gmail.com")
// e.email = "sfsdf"
console.log(e.toString());
console.log(Employess.getInfo());