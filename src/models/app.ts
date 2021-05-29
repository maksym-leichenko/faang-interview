import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'App';

const schema = new Schema({
  name: String
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;
