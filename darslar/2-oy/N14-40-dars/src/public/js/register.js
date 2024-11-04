
const formElement = document.querySelector(".form")

const fullNameElement = document.querySelector("#fullName")
const emailElement = document.querySelector("#email")
const passwordElement = document.querySelector("#password")
const confirmPasswordElement = document.querySelector("#confirmPassword")


formElement.addEventListener("submit", async(e)=>{
    e.preventDefault()
    const fullName = fullNameElement.value
    const email = emailElement.value
    const password = passwordElement.value
    const confirmPassword = confirmPasswordElement.value

    const data = {
        fullName,
        email,
        password
    }
    console.log(data);
    
    if(confirmPassword !== password){
        alert("confirm password is wrong")
        return 
    }
    const res = await fetch('http://localhost:3000/auth/register', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    if(!res.ok){
        alert("error")
        return
    }

    window.location("D:/result_bosqich/darslar/2-oy/N14-40-dars/src/public/login.html")




    // const formData = new FormData(e.target)
    // console.log(formData);
    // const formObj = Object.fromEntries(data.entries())
    // console.log(formObj);
})