import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

import { createHandler } from '@/middleware';
import authGuard from '@/middleware/authGuard';
import prisma from '@/prisma';

const handler = createHandler([authGuard]);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const { user } = await getSession({ req });
  const { id } = req.body;
  const interval = await prisma.interval.findFirst({
    where: {
      id,
      user: {
        email: user.email,
      },
      deleteAt: null,
    },
  });

  if (!interval) {
    res.status(400).json({ error: 'interval not found' });
    return;
  }

  await prisma.interval.update({
    where: {
      id,
    },
    data: {
      deleteAt: new Date(),
    }
  });

  res.json({  });
});

export default handler;
