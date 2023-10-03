import { MongoClient, Db } from 'mongodb';
import getMongoConn from "./db"
import Pais from './models/Pais'

const main = async () => {
  let conn : MongoClient | null = null
  let arrayPaises : Pais[] = [
    new Pais("Brasil", 210),
    new Pais("Peru", 432),
    new Pais("Argentina", 124),
    new Pais("Venezuela", 756),
    new Pais("Colombia", 234),
  ]
  try {
    conn = await getMongoConn()
    const bd = conn.db()
    const paises = bd.collection("paises")

    for (let pais of arrayPaises) {
      await paises.insertOne(pais)
    }
  } catch (error) {
    console.log(error)
  } finally {
    conn?.close()
  }
}

main()