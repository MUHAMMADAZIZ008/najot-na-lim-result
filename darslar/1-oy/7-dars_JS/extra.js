// 1-masala
// function shiftSentence(text){
//     let new_str = ""
//     let index = 0
//     let tem = ""
//     for (let i = 0; i < text.length; i++){
//         tem = ""
//         if (text[i] === " "){
//             new_str[i] = text[index]
//             tem = text[i+1]
//             index = i + 1
//         }else if (i == 0 || )
//     }
//     return a
// }
// String()
// console.log(shiftSentence("creat a function"))

function duplicateNums(arr){
    let new_arr = []
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if (arr[i] === arr[j] && i > j){
                for(let val = 0; val < new_arr.length; val++){
                    if (new_arr[val] != arr[i]){
                        new_arr.push(arr[i])
                    }
                }
                // new_arr.push(arr[i])

            }
        }
    }
    return new_arr.sort()
}
// Array
console.log(duplicateNums([1, 2, 2, 7, 8, 9, 2, 10, 1, 3, 4, 3]))