function unli(str){
    let unliSTR = {
        "a": 97,
        "i" : 105,
        "o" : 111,
        "e" : 101,
        "u" : 117 
    }
    let min = {}
    let min2 = Infinity
    let resul = ""
    for(item in unliSTR){
        let diff = Math.abs(str.charCodeAt() - unliSTR[item])
        min[item] = diff
    }
    for(key in min){
        if(min[key] < min2){
                min2 = min[key]
                resul = key
        }
    }
    return resul
}

console.log(unli("i"));
