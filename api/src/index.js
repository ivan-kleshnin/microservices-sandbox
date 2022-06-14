const express = require("express")
const {ObjectId} = require("mongodb")
const {client} = require("./mongo")
const {PORT, MONGO_URL} = require("./env")

const app = express()

app.get("/api/ping", (req, resp) => {
  resp.send("pong!")
})

app.get("/api/me", (req, resp) => {
  resp.send({
    id: new ObjectId().toString(),
    role: "admin",
  })
})

app.post("/api/register", (req, resp) => {
  const db = client.db("api")
  db.collection("accounts")
    .insertMany([
      {
        id: new ObjectId().toString(),
        role: "client"
      }
    ])
    .then((result) => {
      const insertedIds = Object.values(result.insertedIds)
      db.collection("accounts")
        .find({
          _id: {$in: insertedIds}
        })
        .toArray()
        .then((accounts) => {
          resp.send({
            accounts
          })
        })
    })
})

client
  .connect()
  .then(async () => {
    console.log(`API service connected to DB ${MONGO_URL}`)
    app.listen(PORT, () => {
      console.log(`API service started on port ${PORT}`)
    })
  })



