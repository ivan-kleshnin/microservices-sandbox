import type {NextApiRequest, NextApiResponse} from "next"

type Data = string

export default function nextAuth(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json("dummy")
}

// import {MongoDBAdapter} from "@next-auth/mongodb-adapter"
// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/Github"
// import EmailProvider from "next-auth/providers/Email"
// import {clientPromise} from "lib/mongodb"
//
// // TODO fork and explore https://github.com/nextauthjs/next-auth-example first
//
// export default NextAuth({
//   // adapter: MongoDBAdapter(clientPromise),
//
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // EmailProvider({
//     //   server: {
//     //     host: process.env.EMAIL_SERVER_HOSTNAME,
//     //     port: process.env.EMAIL_SERVER_PORT,
//     //     auth: {
//     //       user: process.env.EMAIL_SERVER_USER,
//     //       pass: process.env.EMAIL_SERVER_PASSWORD,
//     //     },
//     //     from: process.env.EMAIL_FROM,
//     //   }
//     // })
//   ]
// })
