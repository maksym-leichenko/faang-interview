import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'User';

const schema = new Schema({
  name: String,
  email: String,
  image: String,
  createdAt: Date,
  updatedAt: Date,
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
