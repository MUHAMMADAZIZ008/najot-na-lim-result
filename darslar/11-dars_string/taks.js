function truncat(str, n) {
    let newStr = ""
    if(n >= str.length){
        return str
    }
    for(let i = 0; i < str.length; i++){
        if(n > i){
            newStr += str[i]
        }
        else{
            newStr += "."
        }
    }
    return newStr
}
console.log(truncat("salom dunyo", 100));