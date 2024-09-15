import { getEmailDb } from '../model/usersDb.js';
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'

const checkUser = async (req,res, next)=>{
    let {email, password}= req.body
    console.log(email, password)
    let dbData = await getEmailDb(email)
    
    console.log(dbData)
  if(!dbData){
    res.status(404)
    res.json({
      message:"user not found"
   })
  }else{
  console.log(dbData.idusers)
  compare(password, dbData.password, (err, hash)=>{
    if (!hash) {
      res.status(401)
      res.json({
        message:"Incorrect password"
     })
    } else{
      let token = jwt.sign({id:dbData.idusers, email:email}, process.env.TOKEN_SECRET, { expiresIn: '1h' })
      req.body.token = token
      console.log(token)
      res.status(200)
      next()
    }
  })
  }
  
  }
 
const verifyToken =(req,res,next)=>{
  console.log(req.headers);
  
  let token = req.headers.authorization
  console.log('token is'+token)

  jwt.verify(token, process.env.TOKEN_SECRET,(err,decoded)=>{
      if(err){
          res.json({message:'Token has expired', error: err, cookie:token})
          return
      }
      
      req.body.user = decoded
      console.log(decoded);
      next()
  })
  
  
}

export { checkUser,verifyToken };