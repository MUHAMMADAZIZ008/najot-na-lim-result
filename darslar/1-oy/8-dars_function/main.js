
// function sumOfDigits(str){
//     let sum = 0
//     for (let i = 0; i < str.length; i++){
//         if(Number(str[i])){
//             sum = sum + Number(str[i])
//         }
//     }
//     return sum
// }



// console.log(!isNaN(Number("s")))

// console.log(sumOfDigits("ab12c23a2"))

// (function(str) {
//     let new_str = ""
//     for (let i = str.length - 1; i >= 0; i--){
//         new_str += str[i]
//     }
//     console.log(new_str)
//     return new_str
// })("hello")

// // console.log(reversStr("hello"))

// function recursiv_fun(str, len, new_str = ""){
//     if (len >= 0){
//         // len--
//         new_str += str[len]
//         return recursiv_fun(str, len-1, new_str)

//     }
//     return new_str
// }


// function recursiv_fun(str){

// }

// let str = "hello"

// console.log(recursiv_fun(str))

// function num_sum(num){
//     num = String(num)
//     let sum = 0
//     for(let i = 0; i < num.length; i++){
//         sum += Number(num[i])
//     }
//     return sum
// }

// console.log(num_sum(145))


// function distenc(a, b){
//     let i = 2 * a
//     return b - i
// }

// console.log(distenc(20, 39))



// function binary(num){
//     let arr = []
//     while (num) {
//         num = Math.floor(num / 2)
//         arr.push(num % 2)
//     }
//     return arr
// }

// console.log(binary(14))

// function sort(arr1, arr2){
//     let arr3 = [...arr1, ...arr2]
//     for (let i = 0; arr3.length; i++){
//         for (let j = 0; arr3.length; j++){
//             if (arr3[i] < arr3[j]){
//                 arr3[i] = arr3[j]
//             }
//         }
//     }
//     return arr3
// }



// console.log(sort([8,6,5], [14, 5, 5]))



// function text(text1, text2){
//     for (i of text1){
//         for(j of text2){
//             if(i === j){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(text(["salom", "dunyo", "yaramas"], ["ablah", "yaramas"]))



function text(text){
    let obj = {
        a : 0,
        e : 1,
        i : 2,
        o : 3,
        u : 4
    }
    let s = ""
    for (i of text){
        for (j in obj){
            if(i === j){
                s += obj[j]
            }
        }
        s += i
    }
    return s + "eca"
}

console.log(text("banana"))
