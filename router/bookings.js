import { getAllBookings, getBooking, insertBooking, updateBooking, deleteBooking} from '../controller/bookingsCont.js'
import express from "express"

const router = express.Router()

router.get("/", getAllBookings)
router.get("/:id", getBooking)

router.post("/insert", insertBooking)

router.patch("/:id", updateBooking)

router.delete("/:id", deleteBooking )

export default router