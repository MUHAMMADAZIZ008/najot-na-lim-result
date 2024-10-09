


// function revers(x){
//     let a = 0
//     let b = 0
//     for (let i = String(x).length-1; i != 0; i--){
//         a += x % 10
//         x = Math.floor(x / 10)
//         b += a * 10 + x
//     }
//     return b
// }

// let x = 123

// console.log(revers(x))


function squareNumber(n){
    let s = ""
    n = String(n)
    let l = String(n).length
    for (let i = 0; i < l; i++){
        s += String(Math.pow(Number(n[i]), 2))
        console.log(s[i])
    }
    return s
}
console.log(squareNumber(999))