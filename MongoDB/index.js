const express = require('express')
const { MongoClient } = require('mongodb');

const app = express()
const port = 3000

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mySchool';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');

  app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('students');

    const students = await collection.find({}).toArray();

    console.log(students);
    res.send(students); // data send केला
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
}

main().catch(console.error);