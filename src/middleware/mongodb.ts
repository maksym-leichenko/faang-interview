import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'

const DATABASE_URL = process.env.DATABASE_URL;

const databaseMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    }
  }
  catch (err) {
    console.error(err);
  }

  req.mongoose = global.mongoose;
  return next();
};

export default databaseMiddleware;
