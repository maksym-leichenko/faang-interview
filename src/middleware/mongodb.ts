import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

const DATABASE_URL = process.env.DATABASE_URL || '';
let db: typeof mongoose;
const databaseMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  try {
    if (!db) {
      db = await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
  }
  catch (err) {
    console.error(err);
  }

  return next();
};

export default databaseMiddleware;
