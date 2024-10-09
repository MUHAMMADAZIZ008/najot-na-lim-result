const myObj = {
    first_name : "Mauhammadaziz",
    last_name: "Gulomov",
    age : 16,
    address : "Andijon",
    meried : false,
    getFullInformation : function(){
        console.log(`Assalomu alykum men ${this.last_name} ${this.first_name}man. Men ${this.address} viloyatidanman va yoshim ${this.age}`)
    }
}

console.log(myObj.getFullInformation())