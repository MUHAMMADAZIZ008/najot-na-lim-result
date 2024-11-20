import mongoose, { Schema } from "mongoose"

const otpSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    otp_code: {
        type: String,
        required: true
    },
    expires_at: {
        type: Date,
        default: new Date()+60*15*1000
    }

}, {timestamps: true})


otpSchema.method("verify", function(userOtp){
    return userOtp == this.otp_code
})

export const Otp = mongoose.model("otp", otpSchema)