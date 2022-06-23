import Link from "next/link"
import * as React from "react"
import {NODE_ENV, MAIN_ORIGIN, AUTH_ORIGIN} from "env"
import {signIn, signOut, useSession} from "next-auth/react"

export default function Home(props : any) : JSX.Element {
  const session = useSession()
  const [me, setMe] = React.useState(undefined)

  React.useEffect(() => {
    fetch("/auth/api/me").then(resp => resp.json()).then(me => {
      setMe(me)
    }).catch(console.error)
  }, [])

  return <>
    <a href="/">Main App</a> <a href="/auth">Auth App</a>
    <hr/>
    <h2>Main Home Page</h2>
    <main>
      <h4>ENV</h4>
      <pre><code>
        env: {JSON.stringify({NODE_ENV}, null, 2)}
      </code></pre>

      <h4>SERVER API (SSR)</h4>
      <pre><code>
        props: {JSON.stringify(props, null, 2)}
      </code></pre>

      <h4>BROWSER API</h4>
      <pre><code>
        me: {JSON.stringify(me, null, 2)}
      </code></pre>

      <h4>SESSION</h4>
      <pre><code>
        session.data: {
          session.status == "loading"
            ? "..."
            : JSON.stringify(session, null, 2)
        }
      </code></pre>
    </main>
  </>
}

// SSR =============================================================================================
export async function getServerSideProps(context : any) {
  const mainPing = await fetch(MAIN_ORIGIN + "/api/ping").then(resp => resp.text())
  const authPing = await fetch(AUTH_ORIGIN + "/api/ping").then(resp => resp.text())

  return {
    props: {
      mainPing,
      authPing,
    },
  }
}
