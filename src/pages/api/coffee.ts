import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const getTasty = async () => {
		const api_url =
			'https://wrapapi.com/use/alexjamison/tastyco/basket/latest'
		const response = await axios.get(api_url, {
			params: {
				stateToken: process.env.STATE_TOKEN,
				wrapAPIKey: process.env.WRAP_API_KEY,
			}
		})
		const data = await response.data.data
		console.log(data);
		return data
	}
	const result = await getTasty()
	res.status(200).json(result)
}
