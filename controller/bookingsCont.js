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
    res.send('im workinggg')
}

const deleteBooking = async(req,res)=>{
    await deleteBookingDb(req.params.id)
    res.send("booking has been canceled")
}

export {getAllBookings, getBooking, insertBooking, updateBooking, deleteBooking}