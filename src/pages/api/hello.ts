// In a Next.js application, use /pages/api for Node.js functions and use/api for all other languages.
// https://vercel.com/docs/serverless-functions/supported-languages

import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  const { name = 'World' } = request.query;
  response.status(200).send(`Hello ${name}!`);
};

// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string;
// };

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.statusCode = 200;
//   res.json({ name: 'John Doe' });
// };
