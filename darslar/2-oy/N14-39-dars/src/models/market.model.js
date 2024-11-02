import mongoose, { Schema } from "mongoose";

const marketSchema = new Schema(
  {
    name: {
      type: String
    },
    user_id:{
      type: mongoose.Schema.ObjectId,
      require: true
    },
  },
  {
    timestamps: true,
  }
);
export const Market = mongoose.model("market", marketSchema);
