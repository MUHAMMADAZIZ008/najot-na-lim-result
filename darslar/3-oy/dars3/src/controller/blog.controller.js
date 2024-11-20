export const blogContorller = (req, res, next) =>{
    try{
        res.send(["blog1", "blog2"])
    }
    catch(e){
        next(e)
    }
}