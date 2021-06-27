import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

import { createHandler } from '@/middleware';
import authGuard from '@/middleware/authGuard';
import prisma from '@/prisma';

const handler = createHandler([authGuard]);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const { user } = await getSession({ req });
  const result = await prisma.interval.findMany({
    orderBy: [
      {
        dateFrom: 'desc',
      },
    ],
    where: {
      deleteAt: null,
      dateTo: {
        gt: new Date(),
      },
      user: {
        email: user.email
      },
    },
    include: {
      mockTypes: true,
    },
  });

  res.json(result);
});

export default handler;
