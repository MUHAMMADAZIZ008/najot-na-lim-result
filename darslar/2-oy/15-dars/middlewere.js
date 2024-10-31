
export const basicAuthMid = (req, res, next) =>{
    try{
        const b64auth = (req.headers.authorization || "").split(" ")[1] || ""
        const strauth = Buffer.from(b64auth, "base64").toString()
        const splitIndex = strauth.indexOf(":")

        const login = strauth.substring(0, splitIndex)
        const password = strauth.substring(splitIndex+1)

        const isMatchLogin = login === "muhammadaziz"
        const isMatch = password === "qwer1234"
        if(!isMatch || !isMatchLogin){
            throw new Error("Login or password is wrong")
        }
        next()
    }
    catch(e){
        res.status(400).send(e.message)
    }
}