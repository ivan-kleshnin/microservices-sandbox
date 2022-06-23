import {useRouter} from "next/router"
// import {useSession} from "next-auth/react"
import {useQuery} from "react-query"

export async function fetchSession() {
  console.log("@ fetchSession")
  const res = await fetch("/auth/api/auth/session")
  const session = await res.json()
  return Object.keys(session).length ? session : null
}

export function useQuerySession({
  required = true,
  redirectTo = "/auth/api/auth/signin?error=SessionExpired",
  // queryConfig = {},
} = {}) {
  const router = useRouter()
  return useQuery(["session"], fetchSession, {
    // ...queryConfig,
    onSettled(data, error) {
      console.log("@ onSettled")
      // if (queryConfig.onSettled) queryConfig.onSettled(data, error)
      if (data || !required) return
      router.push(redirectTo)
    },
  })
}
