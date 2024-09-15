import { getAllUsersDb, getUserDb, insertUserDb, updateUserDb, deleteUserDb, getEmailDb } from "../model/usersDb.js";
import { hash } from "bcrypt";

const getAllUsers = async(req,res)=>{
    res.json(await getAllUsersDb())
}

const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}

const insertUser = async(req,res)=>{
    try {
        const {email,password,name,surname,profilepic} = req.body
        let dbData = await getEmailDb(email)
        if (dbData) {
            res.status(500)
            res.json({message:'this email already exists'})
            return
            
        }
        
        let hashedPassword = hash(password, 10, async (err, hash)=>{
            if(err){
               throw (err)
            }else{ 
                await insertUserDb(email,hash,name,surname,profilepic)
            res.status(200)
            res.json({message:`user was inserted successfully! `})}
               })} catch (err) {
                  res.status(500)
               res.json({message:err})
               }
      }

const updateUser = async(req,res)=>{
    let idusers= req.params.id
    // if(!idusers) throw("no id was sent");  
    let {email,password,name,surname,profilepic}=req.body
    let storeData= await getUserDb(req.params.id)
    // console.log(storeData.email);
    email? email=email: email=storeData.email
    password? password=password: password=storeData.password
    name? name=name: name=storeData.name
    surname? surname=surname: surname=storeData.surname
    profilepic? profilepic=profilepic: profilepic=storeData.profilepic

    await updateUserDb(email,password,name,surname,profilepic,idusers)
    res.send('im working')
    
}

const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.id)
    res.send("user was successfully deleted")
}

const loginUser = async(req,res)=>{
    res.json({
        message:"You are signed in",
        token:req.body.token
     })
}
export{getAllUsers, getUser,loginUser, insertUser, updateUser, deleteUser}