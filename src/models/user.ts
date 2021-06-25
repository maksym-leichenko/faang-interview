import mongoose, { Schema, Document } from 'mongoose';

const MODEL_NAME = 'User';
export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const schema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  image: String,
  createdAt: Date,
  updatedAt: Date,
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model<IUser>(MODEL_NAME, schema);

export default Model;
