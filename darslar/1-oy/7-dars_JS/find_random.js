let random = 32
let n = +prompt("Sonni toping?")
for (let i = 0; i < 7; i++){
    if (random === n){
        alert(`${i} ta urinishda topdingiz: ${n}`)
        break
    }
    if (i >= 7){
        alert("urinishlar soni tugadi")
        break
    }
    if (n > random){
        alert("Kiritilgan son ?dan katta")
    }else{
        alert("Kiritilgan son ?dan kichik")
    }
    n = +prompt("Sonni toping?")  

}