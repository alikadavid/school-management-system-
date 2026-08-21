import pg from "pg";
import dotenv from 'dotenv';
dotenv.config({path:'./config.env'})

const { Client }= pg;

const db=new Client({
    user:process.env.user,
    host:process.env.host,
    port: process.env.port,
    password: process.env.password,
    database:process.env.database
});
await db.connect()

export default db