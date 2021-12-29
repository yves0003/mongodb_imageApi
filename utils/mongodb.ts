import { MongoClient } from "mongodb";
import config from "../config/config";

let client: MongoClient
let clientPromise: Promise<MongoClient>


if (!config.server.dataBaseUrl) {
  throw new Error("Add a link for mongoDb")
}
if (!config.server.dataBase) {
  throw new Error("Add a dataBase")
}

if (config.server.env === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(config.server.dataBaseUrl)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(config.server.dataBaseUrl)
  clientPromise = client.connect()
}

export default clientPromise