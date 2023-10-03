import { MongoClient } from 'mongodb';
import getMongoConn from "./db"

const main = async () => {
  let conn : MongoClient | null = null
  try {
    conn = await getMongoConn()
  } catch (error) {
    console.log(error)
  } finally {
    if (conn != null) {
      conn.close()
    }
  }
}