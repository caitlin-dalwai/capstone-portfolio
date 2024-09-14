import express from "express"
import usersRoute from "./router/users.js"
import bookingsRoute from "./router/bookings.js"
import cors from "cors"
const app = express()

let port = 7777

app.use(express.json())
app.use(cors({
    origin:"http://localhost:8080",
    credentials:true,
    headers:['Content-Type','Authorization']
}
))

app.use('/users', usersRoute)
app.use('/bookings', bookingsRoute)

app.listen(port, ()=>{
    console.log('http://localhost:'+port);
    
})


