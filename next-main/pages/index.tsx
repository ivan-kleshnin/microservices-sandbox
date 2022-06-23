import Link from "next/link"
import * as React from "react"
import {NODE_ENV, MAIN_ORIGIN, AUTH_ORIGIN} from "env"
import {signIn, signOut, useSession} from "next-auth/react"
import {useQuerySession} from "hooks"

export default function Home(serverApiProps : any) : JSX.Element {
  console.log("@ Home")
  const querySession = useQuerySession()
  // const querySession = useSession()
  const [clientApiProps, setClientApiProps] = React.useState({})

  React.useEffect(() => {
    Promise.all([
      fetch("/api/ping").then(resp => resp.text()),
      fetch("/auth/api/ping").then(resp => resp.text()),
    ])
      .then(([mainPing, authPing]) => setClientApiProps({mainPing, authPing}))
      .catch(console.error)
  }, [])

  return <>
    <a href="/">Main App</a> <a href="/auth">Auth App</a>
    <hr/>
    <h2>Main Home Page</h2>
    <main>
      <h4>ENV</h4>
      <pre><code>
        {JSON.stringify({NODE_ENV}, null, 2)}
      </code></pre>

      <h4>SERVER API (SSR)</h4>
      <pre><code>
        {JSON.stringify(serverApiProps, null, 2)}
      </code></pre>

      <h4>BROWSER API</h4>
      <pre><code>
        {JSON.stringify(clientApiProps, null, 2)}
      </code></pre>

     <h4>SESSION (react-query)</h4>
      <pre><code>
        session.data: {
          querySession.isLoading
            ? "..."
            : JSON.stringify(querySession.data, null, 2)
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
