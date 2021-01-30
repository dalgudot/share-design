// In a Next.js application, use /pages/api for Node.js functions and use/api for all other languages.
// https://vercel.com/docs/serverless-functions/supported-languages

import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  // const { name = 'World' } = req.query;
  // res.status(200).send(`Hello ${name}!`);
  // return res.status(200).json({ data });
};

// import type { NextApiRequest, NextApiResponse } from 'next';

// type Data = {
//   name: string;
// };

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.statusCode = 200;
//   res.json({ name: 'John Doe' });
// };
