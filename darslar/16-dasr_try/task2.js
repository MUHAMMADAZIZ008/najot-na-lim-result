function tartib(str) {
    let obj = {}
    let result = ""
    let max = 0
    str = str.trim()
    str = str.split(" ")
    for(item of str){
        for(let i = 0; i < item.length; i++){
            if(!isNaN(Number(item[i]))){
                obj[item[i]] = item.slice(0, i) + item.slice(i+1)
                if(max < +item[i]){
                    max = +item[i]
                }
            }
        }
    }
    while (max) {
        let min = Infinity
        for(key in obj){
            if(min > +key){
                min = +key
            }
        }
        result += obj[String(min)] + " "
        delete obj[String(min)]
        max--
    }
    return result
}
console.log(tartib("is2 thi1s t4est 3a"));