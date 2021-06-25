import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

import { createHandler } from '@/middleware';
import authGuard from '@/middleware/authGuard';
import prisma from '@/prisma';
import { IIntervalData } from '@/types/interval';

const handler = createHandler([authGuard]);

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  const { user } = await getSession({ req });
  const data: IIntervalData = req.body;
  const result = await prisma.interval.create({
    data: {
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      mocksCount: data.mocksCount,
      mockTypes: { connect: data.mockTypes.map((id) => ({ id })) },
      isPublic: data.isPublic,
      notes: data.notes || '',
      user: {
        connect: { email: user.email }
      },
    }
  });

  res.json(result);
});

export default handler;
