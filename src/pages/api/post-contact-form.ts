import type { NextApiRequest, NextApiResponse } from 'next'
import { type FormData } from '@/utils'

const uri = process.env.CONTACT_FORM_API_URI || ''

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json([{ slug: 'error', content: `'${req.method}' method not allowed` }])
    return
  }

  try {
    const formData: FormData = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }
    const apiRequest = await fetch(uri, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    const apiResponse = await apiRequest.json()

    res.status(200).json({
      message: 'ok',
      apiResponse: apiResponse,
      formData: formData,
      uri: uri
    })
  } catch (error: any) {
    res.status(500).json([{ slug: 'error', content: error }])
    return
  }
}
export default handler
