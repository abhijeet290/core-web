const { MongoClient } = require("mongodb");
require("dotenv").config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.DB_URL;
const client = new MongoClient(url);

// Database Name
const dbName = "CoderArmy";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  // the following code examples can be pasted here...

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  // to understand the above code throuch cursor which act as a pointer to avoid memory waste
  //   const findResult = collection.find({});

  //   for await (const doc of findResult) {
  //     console.log(doc);
  //   }

  // const insertResult = await collection.insertOne({name:"sanvi",age:1,city:"delhi"});
  // console.log('Inserted documents =>', insertResult);

  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // console.log('Inserted documents =>', insertResult);

  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log("Found documents filtered by { a: 3 } =>", filteredDocs);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
