import type {NextApiRequest, NextApiResponse} from "next"

type Payload = string

export default function register(req: NextApiRequest, res: NextApiResponse<Payload>) {
  res.status(200).json("dummy")
}

// const {ObjectId} = require("mongodb")
// const {client} = require("./mongo")
// const {PORT, MONGO_URL} = require("./env")
//
// const app = express()
//
// app.post("/register", (req, resp) => {
//   const db = client.db("api")
//   db.collection("users")
//     .insertMany([
//       {
//         id: new ObjectId().toString(),
//         role: "client"
//       }
//     ])
//     .then((result) => {
//       const insertedIds = Object.values(result.insertedIds)
//       db.collection("users")
//         .find({
//           _id: {$in: insertedIds}
//         })
//         .toArray()
//         .then((users) => {
//           resp.send({
//             users
//           })
//         })
//     })
// })
//
// client
//   .connect()
//   .then(async () => {
//     console.log(`API service connected to DB ${MONGO_URL}`)
//     app.listen(PORT, () => {
//       console.log(`API service started on port ${PORT}`)
//     })
//   })
//
//
//
