// function defineCritics(...arr) {
//     let max = 0
//     let min = 0
//     for(item of arr){
//         if(max < item){
//             max = item
//         }
//         if(min > item){
//             min = item
//         }
//     }
//     return [max, min]
// }
// console.log(defineCritics(1,4,8,4,7,7,8))

function defineCritics(...arr) {

    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return [min, max]

}

console.log(defineCritics(10,4,18,4,7,7,8))
