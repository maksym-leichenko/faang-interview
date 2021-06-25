import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

import { createHandler } from '@/middleware';
import authGuard from '@/middleware/authGuard';
// import User from '@/models/user';

const handler = createHandler([authGuard]);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  // const apps = await User.find().exec();
  res.json(session);
});

export default handler;
