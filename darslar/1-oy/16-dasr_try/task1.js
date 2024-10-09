let result = true
let myPro1 = new Promise((resolve, reject) =>{
    if(result){
        resolve("ishladi")
    }else{
        reject("ishlamadi1")
    }
})

let myPro2 = new Promise((resolve, reject) =>{
    if(result){
        reject("ishlamadi!")
    }else{
        resolve("ishladi2")
    }
})

myPro1
    .then((res) => console.log(res))
    .catch((res) => console.log(res))

myPro2
    .then((res) => console.log(res))
    .catch((res) => console.log(res))