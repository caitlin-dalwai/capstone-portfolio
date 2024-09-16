import express from "express"
import usersRoute from "./router/users.js"
import bookingsRoute from "./router/bookings.js"
import cors from "cors"
const app = express()

let port = 7777

app.use(express.json())
app.use(cors({
    origin: ['https://matesandmutts.web.app','*'],
    credentials: true,

    
}
))
// app.use(( req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Methods", "*");
//     res.header("Access-Control-Request-Methods", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Expose-Headers", "Authorization");
//     next();
// })
app.use('/users', usersRoute)
app.use('/bookings', bookingsRoute)

app.listen(port, ()=>{
    console.log('http://localhost:'+port);
    
})


