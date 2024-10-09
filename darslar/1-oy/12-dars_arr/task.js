function arr(arr) {
    let len = arr.length / 2
    let s = arr.slice(0, len)
    let e = arr.slice(len, arr.length)

    let s1 = s.reduce((acc, num) => acc + num, 0)
    let e1 = e.reduce((acc, num) => acc + num, 0)

    if(s1 === e1){
        return arr
    }
    if(s1 > e1){
        return s
    }else{
        return e
    }
}

console.log(arr([9,8,3,4,5,6]));
console.log(arr([2, 2]));
console.log(arr([2, 2]));
