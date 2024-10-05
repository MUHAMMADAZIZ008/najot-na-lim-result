// let fizzBuzz = prompt("son kiriting")
// fizzBuzz = +fizzBuzz

// if (fizzBuzz % 3 == 0 && fizzBuzz % 5 == 0){
//     console.log("FizzBuzz")
// } else if (fizzBuzz % 5 == 0){
//     console.log("Buzz")
// } else if (fizzBuzz % 3){
//     console.log("Fizz")
// } else{
//     console.log("Fizz ham buzz ham emas")
// }

// let full_name = prompt("Isim familiyangizni kiriting")
// let typeOfroom = prompt("Hona turi kiriting")
// let pochet = prompt("Hisobingizdagi mablag'ni kiriting")
// let age = prompt("Yozshingiz kiriting")

// pochet = +pochet
// age = +age

// if (age < 18){
//     alert("Siz xona olishga yoshingiz yetmaydi")
// }
// if (typeOfroom.toLowerCase === "biznes" && pochet < 1000 && age > 18){
//     alert("Biznes xonaga pulingiz yetmaydi")
// } else if (age > 60){
//     alert(`Xush kelibsiz: ${full_name} sizga Biznes xon ajratildi va sizga 10% chegizma qilindi`)
// }else {
//     alert(`Xush kelibsiz: ${full_name} sizga Biznes xon ajratildi`)
// }

// if (typeOfroom.toLowerCase === "standart" && pochet < 100 && age > 18){
//     alert("Standart xonga pulingiz yetmaydi")
// } else{
//     alert(`Xush kelibsiz: ${full_name} sizga Standart xon ajratildi`)
// }

// if (typeOfroom.toLowerCase === "luks" && pochet < 20000 && age > 18){
//     alert("Luks xonaga pulingiz yetmaydi")
// } else if (age > 60){
//     alert(`Xush kelibsiz: ${full_name} sizga Standart xon ajratildi va sizga 10% chegizma qilindi`)
// }else{
//     alert(`Xush kelibsiz: ${full_name} sizga Standart xon ajratildi`)
// }


// let week = +prompt("Son kiriting")

// switch (week) {
//     case 1:
//         alert("Manday")
//         break
//     case 2:
//         alert("Tusday")
//         break
//     case 3:
//         alert("Wednesday")
//         break
//     case 4:
//         alert("Thursday")
//         break
//     case 5:
//         alert("Friday")
//         break
//     case 6:
//         alert("saturday")
//         break
//     case 7:
//         alert("sunday")
//         break
//     default:
//         alert("Bunday hafta kuni yo'q")
//         break

// }



let month = prompt("Oy nomini kiriting")
month = month.toLowerCase()

switch (month) {
    case "dekabr":
        alert("Qish")
        break;
    case "yanvar":
        alert("Qish")
        break;
    case "fevral":
        alert("Qish")
        break;
    case "mart":
        alert("Bahor")
        break;
    case "aprel":
        alert("Bahor")
        break;
    case "may":
        alert("Bahor")
        break;
    case "iyun":
        alert("Yoz")
        break;
    case "iyul":
        alert("Yoz")
        break;
    case "avgust":
        alert("Yoz")
        break;
    case "sentyabr":
        alert("Kuz")
        break;
    case "oktyabr":
        alert("Kuz")
        break;
    case "noyabr":
        alert("Kuz")
        break;
    default:
        alert("Bunday fasil yo'q")
        break;
}