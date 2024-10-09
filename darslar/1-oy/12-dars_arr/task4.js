function _sum(item) {
    item = String(item)

    let sum = 0
    while (item.length !== 1) {
        for(let i = 0; i < item.length; i++){
            sum += Number(item[i])
        }
        console.log(sum);
        item = String(sum)
        console.log(item);
    }
    return sum
}

console.log(_sum(123));