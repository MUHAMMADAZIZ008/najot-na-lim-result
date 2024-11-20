import { User } from "../modules/user.module.js";
import { errorMessages, statusCodes } from "../utils/index.js";
export const userController = async(req, res, next) =>{
    try{
        const payload = req.user
        const body = req.body
        const currentUser = await User.findOne({email: payload.sub})

        if (!currentUser) {
            return res.status(statusCodes.NOT_FOUND).send(errorMessages.EMAIL_ALREADY_EXISTS);

            // return res.status(statusCodes.NOT_FOUND).send(errorMessages.USER_NOT_FOUND);
        }
        const newUser = new User(body)
        await newUser.save()
        return res.send(currentUser)
    }
    catch(e){
        next(e)
    }
}

export const userUpdateController = async(req, res, next) =>{
    try{
        const body = req.body
        const id = req.params.id
        const updateUser = await User.findByIdAndUpdate(id, body)
        if(!updateUser){
            return res.status(statusCodes.NOT_FOUND).send(errorMessages.USER_NOT_FOUND);
        }

        return res.status(statusCodes.OK).send("Update")
    }
    catch(e){
        next(e)
    }
}