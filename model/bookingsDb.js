import { pool } from "../config/config.js";

const getAllBookingsDb = async()=>{
    const [data] = await pool.query('SELECT * FROM bookings')
    return data;
}

const getBookingDb = async(id)=>{
    const [[data]] = await pool.query('SELECT * FROM bookings WHERE idbookings=?',[id])
    return data;
}

const insertBookingDb = async(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time)=>{
    await pool.query('INSERT INTO bookings(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time) VALUES(?,?,?,?,?,?,?)',[idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time])
}

const updateBookingDb = async(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time,idbookings)=>{
    await pool.query('UPDATE bookings set idusers=?, idmenu=?, date=?, numberofpeople=?, numberofdogs=?, foodbrand=?, time=? WHERE idbookings=?', [idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time,idbookings] )
}

const deleteBookingDb = async(idbookings)=>{
    await pool.query('DELETE FROM bookings WHERE idbookings=?', [idbookings])
}

export {getAllBookingsDb, getBookingDb, insertBookingDb, updateBookingDb, deleteBookingDb}