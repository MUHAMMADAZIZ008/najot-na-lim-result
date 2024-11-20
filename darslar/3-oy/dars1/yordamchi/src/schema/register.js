import Joi from "joi"

export const RegisteraSchema = Joi.object({
    fullName: z.string().optional(),
    email: z.string().email().messamge(),
    password: z.string().min(6)
})