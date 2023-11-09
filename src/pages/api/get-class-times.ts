import type { NextApiRequest, NextApiResponse } from 'next'

type PinResponseData = {
  status: string
  error?: string
  classTimes?: string
}
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PinResponseData>
) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ status: 'error', error: `'${req.method}' method not allowed` })
  }

  try {
    const classTimes = fetch(
      'https://online.studiokura.com/cake/class_types/listwidget/2/json'
    ).then((res) => res.json())

    let resultBody = {
      status: 'success',
      classTimes: await classTimes
    }
    res.status(200).json(resultBody)
  } catch (error: any) {
    res.status(500).json({ status: 'failed', error })
  }
}
export default handler
