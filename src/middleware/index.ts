import nextConnect from 'next-connect';

import mongodb from './mongodb';

export function createHandler(...middleware: any[]) {
  return nextConnect().use(mongodb, ...middleware);
}
