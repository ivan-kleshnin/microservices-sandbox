import {MongoClient, Db} from "mongodb"
import {MONGO_URL} from "env"

const options = {}

// Export a module-scoped MongoClient promises. By doing it in a
// separate module, the client & db can be shared across functions.
let client : MongoClient
export let clientPromise : Promise<MongoClient>
export let dbPromise : Promise<Db>

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGO_URL, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
  dbPromise = clientPromise.then(client => client.db("default")) // TODO !
} else {
  // In production mode, it"s best to not use a global variable.
  client = new MongoClient(MONGO_URL, options)
  clientPromise = client.connect()
  dbPromise = clientPromise.then(client => client.db("default")) // TODO !
}


