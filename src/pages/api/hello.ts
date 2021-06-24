import type { NextApiRequest, NextApiResponse } from 'next'

import { createHandler } from '@/middleware';
import User from '@/models/user';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {

  // const doc = new App({
  //   name: 'Bill',
  // });
  // await doc.save();
  // // Do something with App
  const apps = await User.find().exec();

  res.json(apps);

});

export default handler;
