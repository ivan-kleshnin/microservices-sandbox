import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as React from "react"
import {MAIN_ORIGIN, AUTH_ORIGIN} from "../env"
import styles from '../styles/Home.module.css'

const Home: NextPage = (props : any) : JSX.Element => {
  const [me, setMe] = React.useState(undefined)

  React.useEffect(() => {
    fetch("/auth/api/me").then(resp => resp.json()).then(me => {
      console.log("setMe:", me)
      setMe(me)
    }).catch(console.error)
  }, [])

  return <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App+</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>ENV</h4>
        <pre><code>{`
          NODE_ENV = ${process.env.NODE_ENV}
        `}</code></pre>

        <h4>SERVER API (SSR)</h4>
        <pre><code>
          props: {JSON.stringify(props, null, 2)}
        </code></pre>

        <h4>BROWSER API</h4>
        <pre><code>
          me: {JSON.stringify(me, null, 2)}
        </code></pre>
      </main>
    </div>
  </>
}

export default Home

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