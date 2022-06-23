import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {signIn, signOut, useSession} from "next-auth/react"

export default function Auth() : JSX.Element {
  const {data: session} = useSession()

  return <>
    <a href="/">Main App</a> <a href="/auth">Auth App</a>
    <hr/>
    <h2>Auth Home Page</h2>
    <main>
      {
        session ? (
          <>
            <p>
              Signed in as {session.user?.email}
            </p>
            <pre><code>
              {JSON.stringify(session, null, 2)}
            </code></pre>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <p>
              Not signed in!
            </p>
            <button onClick={() => signIn()}>Sign In</button>
          </>
        )
      }
    </main>
  </>
}
