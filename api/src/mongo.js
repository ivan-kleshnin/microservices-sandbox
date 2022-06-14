const {MongoClient} = require("mongodb")
const {MONGO_URL} = require("./env")

// Replace the uri string with your MongoDB deployment's connection string.
// const MONGO_URI = "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority"

exports.client = new MongoClient(MONGO_URL)
