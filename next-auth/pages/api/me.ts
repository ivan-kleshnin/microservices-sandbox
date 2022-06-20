import type {NextApiRequest, NextApiResponse} from "next"
import {ObjectId} from "mongodb"

type Data = {
  id : string
  role : string
}

export default function me(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({
    id: new ObjectId().toString(),
    role: "admin",
  })
}
