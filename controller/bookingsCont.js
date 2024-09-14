import {getAllBookingsDb, getBookingDb, insertBookingDb, updateBookingDb, deleteBookingDb} from '../model/bookingsDb.js'

const getAllBookings = async(req,res)=>{
    res.json(await getAllBookingsDb())
}

const getBooking = async(req,res)=>{
    res.json(await getBookingDb(req.params.id))
}

const insertBooking = async(req,res)=>{
    try {
        const {idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time} = req.body
        console.log(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time)
            await insertBookingDb(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time)
            res.status(200)
            res.json({message: 'thank you for booking with us!'})
    } catch (error) {
        res.status(500)
    res.json({message:error})
    }
}

const updateBooking = async(req,res)=>{
    let idbookings= req.params.id
    let {idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time}=req.body
    let storeData = await getBookingDb(idbookings)
    // console.log(storeData);
    
    idusers? idusers=idusers: idusers=storeData.idusers
    idmenu? idmenu=idmenu: idmenu=storeData.idmenu
    date? date=date: date=storeData.date
    numberofpeople? numberofpeople=numberofpeople: numberofpeople=storeData.numberofpeople
    numberofdogs? numberofdogs=numberofdogs: numberofdogs=storeData.numberofdogs
    foodbrand? foodbrand=foodbrand: foodbrand=storeData.foodbrand
    time? time=time: time=storeData.time

    await updateBookingDb(idusers,idmenu,date,numberofpeople,numberofdogs,foodbrand,time,idbookings)
    res.json({message:'booking has been updated',data:await getAllBookingsDb()})
}

const deleteBooking = async(req,res)=>{
    await deleteBookingDb(req.params.id)
    res.json({message:'booking has been cancelled',data:await getAllBookingsDb()})
    
}

export {getAllBookings, getBooking, insertBooking, updateBooking, deleteBooking}