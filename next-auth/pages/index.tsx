import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import {signIn, signOut, useSession} from "next-auth/react"

export default function Auth() : JSX.Element {
  console.log("@ Auth")
  const session = useSession()

  return <>
    <a href="/">Main App</a> <a href="/auth">Auth App</a>
    <hr/>
    <h2>Auth Home Page</h2>
    <main>
      {
        session.data ? (
          <>
            <p>
              Signed in as {session.data.user?.email}
            </p>
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

      <h4>SESSION (next-auth)</h4>
      <pre><code>
        session.data: {
          session.status == "loading"
            ? "..."
            : JSON.stringify(session.data, null, 2)
        }
      </code></pre>
    </main>
  </>
}
