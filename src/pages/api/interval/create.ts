import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

import { createHandler } from '@/middleware';
import authGuard from '@/middleware/authGuard';
import prisma from '@/prisma';

const handler = createHandler([authGuard]);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getSession({ req });
  const user = await prisma.user.findFirst();

  res.json(user);
});

export default handler;
