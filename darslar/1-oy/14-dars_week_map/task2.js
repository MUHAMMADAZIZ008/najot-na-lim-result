function returnObj(params) {
    let obj = {
        age : 0,
        gamil : "",
        name : "",
        phone : 0
    } 
    for(item of params){
        if(typeof item === "number"){
            obj["age"] = item
        }else if(item.includes("@")){
            obj["gamil"] = item
        }else if(item[0] === "+"){
            obj["phone"] = item
        } else{
            obj["name"] = item
        }
    }
    return obj
}

String().includes
console.log(returnObj(["salim", 23, "salim@", "+999"]));