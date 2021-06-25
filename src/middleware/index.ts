import nextConnect from 'next-connect';

export function createHandler(...middleware: any[]) {
  return nextConnect().use(...middleware);
}
