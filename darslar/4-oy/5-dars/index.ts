// function processData(data: any){
//     if(typeof data === "string"){
//         try{
//             const parsedData = JSON.parse(data)
//             console.log("parsed json data:", parsedData);
//         }
//         catch(e){
//             console.error(e);
            
//         }
//     }
//     else if(typeof data === "object"){
//         console.log("processing object data:", data);
//     }
//     else{
//         console.error("unsupperted data type");
        
//     }+
// }


// const jsonData = '{"name": "alice", "age": 25}'
// const objectData = {name: "Bob", age: 30}

// processData(jsonData)

type GetValue<T, K extends keyof T> = (obj: T, key:K) => T[K]

const getValue = <T, K extends keyof T> (obj: T, key: K): T[K] =>{
    return obj[key]
}

const car = {
    name: "BMW",
    year: 2024,
    model: "M5"
}

getValue(car, "name")