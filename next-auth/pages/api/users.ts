import type {NextApiRequest, NextApiResponse} from "next"
import {dbPromise} from "lib/mongo"

type Payload = {
  data : object[]
}

export default async function ping(req: NextApiRequest, res: NextApiResponse<Payload>) {
  const db = await dbPromise
  const users = await db.collection("users").find().toArray()
  res.status(200).send({data: users})
}
