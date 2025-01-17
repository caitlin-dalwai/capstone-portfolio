import mysql from "mysql2/promise"
import {config} from "dotenv"
config()

const pool = mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    database:process.env.database,
    password:process.env.password
})

export {pool}
