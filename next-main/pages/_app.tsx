import type {AppProps} from "next/app"
import {SessionProvider} from "next-auth/react"
import * as React from "react"
import {QueryClient, QueryClientProvider} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"

export default function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // NODE_ENV == "production",
        retry: 2, // ENV_VAR == "prod" ? 3 : 2,
        cacheTime: 10 * 60 * 1000, // 10 min (up from default 5 min)
        notifyOnChangeProps: "tracked",
      },
    }
  }))

  return <>
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session} basePath="/auth/api/auth">
        <Component {...pageProps}/>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  </>
}
