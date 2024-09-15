import {pool} from "../config/config.js"

const getAllUsersDb = async()=>{
    const [data] = await pool.query('SELECT * FROM users')
    return data;
}

const getUserDb = async(id)=>{
    const [[data]] = await pool.query('SELECT * FROM users WHERE idusers=?',[id])
    return data;
}
const getEmailDb = async(email)=>{
    const [[data]] = await pool.query('SELECT * FROM users WHERE email=?',[email])
    return data;
}

const insertUserDb = async(email,password,name,surname,profilepic)=>{
    await pool.query('INSERT INTO users(email,password,name,surname,profilepic) VALUES(?,?,?,?,?)',[email,password,name,surname,profilepic])
}

const updateUserDb = async(email,password,name,surname,profilepic,idusers)=>{
    await pool.query('UPDATE users set email=?, password=?, name=?, surname=?, profilepic=? WHERE idusers=?',[email,password,name,surname,profilepic,idusers])
}

const deleteUserDb = async(idusers)=>{
    await pool.query('DELETE FROM users WHERE idusers=?', [idusers])
}

export {getAllUsersDb, getUserDb,getEmailDb, insertUserDb, updateUserDb, deleteUserDb}