// function MyDecarator(target: Function){
//     target.prototype.name = 'Muhammadaziz'
// }
// @MyDecarator
// class User {
//   constructor(public name: string, public age: number){}

//   getName(): string {
//     return this.name
    
//   }
// }
// const user1 = new User('name', 1)
// console.log(user1.getName());

function MyDecorator<T extends { new (...args: any[]): {}}>(constructor: T){
    return class extends constructor{
        type = 'info'
    }
}

@MyDecorator
class MyClass {
    type = 'report';
    title: string;
    constructor(title: string){
        this.title = title
    }
}

const bug = new MyClass("need dark mode")
console.log(bug.title);
console.log(bug.type);
