import type { NextApiRequest, NextApiResponse } from 'next'

import { createHandler } from '@/middleware';
import App from '@/models/app';

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {

  // const doc = new App({
  //   name: 'Bill',
  // });
  // await doc.save();
  // // Do something with App
  const apps = await App.find().exec();

  res.json(apps);

});

export default handler;
