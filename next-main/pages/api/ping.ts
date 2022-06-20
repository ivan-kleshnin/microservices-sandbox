import type {NextApiRequest, NextApiResponse} from "next"

type Payload = string

export default async function ping(req: NextApiRequest, res: NextApiResponse<Payload>) {
  res.status(200).send("pong")
}
