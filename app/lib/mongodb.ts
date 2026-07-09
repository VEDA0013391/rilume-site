import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setDefaultResultOrder("ipv4first");

const uri = process.env.MONGODB_URI!;

if (!uri) {
  throw new Error("MONGODB_URI is not defined");
}

let client: MongoClient;
let promise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var mongo: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global.mongo) {
    client = new MongoClient(uri);

    global.mongo = client.connect().then((client) => {
      console.log("✅ MongoDB Atlas に接続しました");
      return client;
    });
  }

  promise = global.mongo;
} else {
  client = new MongoClient(uri);

  promise = client.connect().then((client) => {
    console.log("✅ MongoDB Atlas に接続しました");
    return client;
  });
}

export default promise;