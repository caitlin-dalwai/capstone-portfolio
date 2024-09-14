import express from "express"
import usersRoute from "./router/users.js"

const app = express()

let port = 7777

app.use(express.json())

app.use('/users', usersRoute)

app.listen(port, ()=>{
    console.log('http://localhost:'+port);
    
})


