function getElement(arr, n) {
    let new_arr = []
    for(item1 of arr){
        if(typeof item1 === n){

            new_arr.push(item1)
        }
    }
    if(!new_arr){
        return null
    }
    return new_arr
}

console.log(getElement(["6", 6, "8", 8], "function"));