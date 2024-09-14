import { getAllUsersDb, getUserDb, insertUserDb, updateUserDb, deleteUserDb } from "../model/usersDb.js";


const getAllUsers = async(req,res)=>{
    res.json(await getAllUsersDb())
}

const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}

const insertUser = async(req,res)=>{
    try {
        const {email,password,name,surname,profilepic} = req.body
    await insertUserDb(email,password,name,surname,profilepic)
    res.status(200)
    res.json({message:'user was inserted successfully!'})
    } catch (error) {
        res.status(500)
    res.json({message:error})
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

export{getAllUsers, getUser, insertUser, updateUser, deleteUser}