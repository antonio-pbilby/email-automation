import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  first_name: string;
  last_name: string;
  email: string;
}

export interface ICreateUserDTO {
  first_name: string;
  last_name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
