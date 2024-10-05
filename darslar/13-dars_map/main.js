// main.js

// Foydalanuvchilarni saqlash uchun Map
const users = new Map();

// Tizimga kirgan foydalanuvchilarni saqlash uchun Set
const loggedInUsers = new Set();


let isTrue = true

let commend = `
    1 - Register \n
    2 - Login \n
    3 - User menu
    4 - Show profile
    5 - exit
`
while (isTrue) {
    alert(commend)
    let ask = prompt("Choise commend").toLocaleLowerCase()
    switch (ask) {
        case "register":
            let name = prompt("Enter a name")
            let email = prompt("Enter a email")
            let password = prompt("Enter a passwod")
            let userInfo = new Array(name, email, password)
            register(userInfo)
            break;

        case "login":
            let login_email = prompt("Enter your email")
            let login_password = prompt("Enter your passwod")
            let loginInfo = new Array(login_email, login_password)
            if(login(loginInfo)){
                alert("Muvaffaqiyatli kirlidi")
            }else{
                alert("Bunday user yo'q")
            }
            break;
        case "user menu":
            userMenu()
            break;
        case "show profile":
            showProfile(loggedInUsers)
            break;
        case "exit":
            isTrue = false
            break
        default:
            break;
    }
}

// Ilovani ishga tushirish


// Ro'yxatdan o'tkazish funksiyasi
function register(userInfo) {
    for([key, value] of users){
        if(key === userInfo[1]){
            alert("Kritilgan email allaqachon mavjut")
            return false
        }
    }
    users.set(userInfo[1], {
        name : userInfo[0],
        email : userInfo[1],
        password : userInfo[2],
    })
    alert("Mufaqiyatli ro'yhatdan o'tildi")
}    

// Login funksiyasi
function login(loginInfo) {
    loggedInUsers.clear();
    for([key, value] of users){
        if(key === loginInfo[0] && users.key["password"] === loginInfo[1]){
            loggedInUsers.add(key)
            return true
        }
    }
    return false
}

// Foydalanuvchi uchun menyu
function userMenu() {
    let userInfo = ""
    for ([key, value] of users){
        userInfo += `
            name : ${users.get(key)["name"]}:
                email : ${users.get(key)["email"]}:
                password : ${users.get(key)["password"]}:
        `
    }
    alert(userInfo)
}

// Foydalanuvchi profilini ko'rsatish
function showProfile(email) {
    let loggin = [...loggedInUsers]
    let logginStr = ""
    for([key, value] of users){
        if(key === loggin[0]){
            logginStr += `
            name : ${users.get(key)["name"]}:
                email : ${users.get(key)["email"]}:
                password : ${users.get(key)["password"]}:
        `
        }
    }
    alert(logginStr)
}