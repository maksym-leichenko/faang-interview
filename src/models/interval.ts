import mongoose, { Schema } from 'mongoose';
import { IIntervalData } from '@/types/interval';

const MODEL_NAME = 'Interval';

const schema: Schema = new Schema({
  mocksCount: Number,
  mockTypes: [String],
  isPublic: String,
  dateFrom: Date,
  dateTo: Date,
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model<IIntervalData>(MODEL_NAME, schema);

export default Model;
