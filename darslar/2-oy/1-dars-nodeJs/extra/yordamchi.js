// function a(a) {
//     return a * 2
// }

// function b(b) {
//     return b * 3
// }

// function m() {
//     return {
//         A(n){
//             return n * 2
//         },
//         B(n){
//             return n * 3
//         }
//     }
// }

// let {A:a, B:b} = m()

// console.log(a(2) + b(4));
// console.log(a(4) + b(5));
// console.log(a(1) + b(1));



const url = "https://kun.uz/uzbekistan/15?district=tashkent&region=parkent#top"

let hrf = new URL(url)
hrf.searchParams.set("player", "Ronaldo")
console.log(hrf);
