// let person1 = {
//     fname : "Muhammadaziz",
//     lname : "Gulomov",

// }

// let person2 = {
//     fname : "Asaullo",
//     lname : "Yusupov",
// }

// let getFullName = function(){
//     console.log(`Name: ${this.fname}, Last name: ${this.lname}`);
// }

// // getFullName.call(person2)
// // getFullName.call(person1)

// getFullName.apply(person1)


// mathOperation = {
//     sum_(){
//         let arr = arguments
//         console.log(Object.values(arr).reduce((acc , num) => acc + num));

        
//     }
// }


// mathOperation.sum_.apply(null, [10,20,30])

//-------------------------------------------------
const controller = new AbortController()
const signal = controller.signal

fetch("https://slowmo.me/5000", {signal})
    .then((r) => r.json())
    .then((res) => console.log(res))
    .catch((e) =>{
        if(e.name === "AbortError"){
            console.log("fetch was aborte");
        }else{
            console.error("oop", e);
        }
    })
setTimeout(()=>{
    controller.abort()
}, 2000)