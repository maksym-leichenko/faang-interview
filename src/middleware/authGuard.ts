import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/client";

const authGuard = async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
  const session = await getSession({ req });
  if (session === null) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  return next();
};

export default authGuard;
