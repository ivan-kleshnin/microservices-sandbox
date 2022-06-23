import type {NextApiRequest, NextApiResponse} from "next"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

type Data = string

export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {label: "Username", type: "text", placeholder: "Type root", defaultValue: "root"},
        password: {label: "Password", type: "password", defaultValue: "SDAgAERtraDY6tr8"},
      },

      async authorize(credentials, req) {
        console.log("@authorize")
        if (credentials && credentials.username == "root" && credentials.password == "SDAgAERtraDY6tr8") {
          console.log("@ valid credentials")
          return {
            id: "foo-bar",
            name: "John",
            email: "johndoe@test.com",
          }
        } else {
          console.log("@ invalid credentials")
          return null
        }
      }
    })
  ],

  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
    // session: async (session, user) => { return Promise.resolve(session) },

    // This callback is called whenever a JSON Web Token is created (i.e. at sign in)
    // or updated (i.e whenever a session is accessed in the client).
    // The returned value will be encrypted, and it is stored in a cookie.
    async jwt({token, ...rest1}, ...rest2) {
      console.log("@ jwt")
      return token
    },

    // jwt: async (token, user, account, profile, isNewUser) => {
    //   if (user) {
    //     token.accessToken = account.accessToken;
    //     token.sub = user.email;
    //     token['https://hasura.io/jwt/claims'] = {
    //       'x-hasura-default-role': 'user',
    //       'x-hasura-allowed-roles': ["user"],
    //     }
    //   }
    //   token.iat = `${Date.now() / 1000}`
    //   token.exp = `${Math.floor(Date.now() / 1000) + 24 * 60 * 60}`
    //   token.sub = `${token.id}`
    //   return token
    // }

    async session({token, session, ...rest1}, ...rest2) {
      console.log("@ session")
      return {...session, id: token.sub}
    },
  },

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: "test", // process.env.SECRET or similar

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: automatically set to "jwt" if no database is specified (right?).
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: "test", // process.env.JWT_SECRET, -- from types does not seem necessary...

    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    // maxAge: 60 * 60 * 24 * 30,

    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },

  theme: {
    colorScheme: "light",
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
})

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


// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: DefaultUser & {
//       id: string;
//     };
//   }
// }
