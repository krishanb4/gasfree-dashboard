// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import getWalletBalances from '../../utils/getWalletTokenBalance';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const { address } = req.query;
	const response = await getWalletBalances(<string>address);
	res.status(200).json(response);
}
