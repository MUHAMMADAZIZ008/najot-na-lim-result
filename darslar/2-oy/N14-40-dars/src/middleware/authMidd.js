export const authMiddleweare = (schema) =>{
    return (req, res, next) =>{
        try{
            schema.parse(req.body)
            next()
        }
        catch(e){
            next(e)
        }
    }
}