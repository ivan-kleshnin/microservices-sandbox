import {MongoClient} from "mongodb"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      MONGO_URL : string
      // HOST: string
      // PORT : string
      // PWD : string
    }
  }

  var _mongoClientPromise : Promise<MongoClient>
}
