import { model, Schema, Document } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String
});

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  createdAt: string;
}

export default model<IUser>('User', userSchema);