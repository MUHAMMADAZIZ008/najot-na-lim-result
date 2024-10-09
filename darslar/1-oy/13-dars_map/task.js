function matrix(num) {
    let newArr = []
    let count = 1
    for(let i = 1; i <= num; i++){
        temp = []
        for(let j = 1; j <= num; j++){
            temp.push(count++)
        }
        newArr.push(temp)
    }
    return newArr
}
console.log(matrix(5));