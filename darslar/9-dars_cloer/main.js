// function revers(text, n, m){
//     new_str = ""
//     for (i of text){
//         if(i === n ){
//             new_str += m
//         } else if(i === m){
//             new_str += n
//         }else{
//             new_str += i
//         }
//     }
//     return new_str
// }

// console.log(revers("salom-u kalom", "m", "n"))


// function func(text){
//     let new_str = ""
//     let end = text.length - 1
//     for (let i = 0; i < text.length / 2; i++){
//         new_str += text[i]
//         new_str += text[end]
//         end--

//     }
//     if(new_str.length % 2 === 1){
//         return new_str.slice(0, new_str.length - 1)
//     }
//     return new_str
    
// }

// console.log(func("salomat"))

// function remov_func(arr){
//     let new_arr = []
//     arr = arr.sort()
//     for(item of arr){
//         if(item != new_arr[new_arr.length-1]){
//             new_arr.push(item)
//         }
//     }
//     return new_arr
// }

// console.log(remov_func([1,3,4,1,5,4,3]))
// console.log(remov_func(["key", 16, true, "key", null, false, true]))

function fill_arr(arr){
    let new_arr = []
    for (let i = 0; i < arr.length; i++){
        let row = []
        for (let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                row.push(arr[i])
            }
        }
        new_arr = new_arr.sort()
        if(JSON.stringify(row) != JSON.stringify(new_arr[new_arr.length - 1])){
            new_arr.push(row)
        }

    }
    return new_arr
}


console.log(fill_arr([7,1,3,4,1,5,4,3,3]))