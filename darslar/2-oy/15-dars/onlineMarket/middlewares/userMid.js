export const usersMiddlewares = (req, res,  next) =>{
    try{
        let body = req.body
        if(!body.username || body.password || !body.firstname || !body.lastname || !body.email || !body.addres)
    }
    catch(e){
        next(e)
    }
}