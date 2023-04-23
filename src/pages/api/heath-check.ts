import { NextApiRequest, NextApiResponse } from 'next'

type HealthCheckRes = {
  status: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthCheckRes>) {
  res.status(200).json({ status: '정상' })
}
