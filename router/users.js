import { getAllUsers, getUser, insertUser, updateUser, deleteUser } from "../controller/usersCont.js";
import express from "express"

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)

router.post("/insert", insertUser)

router.patch("/:id", updateUser)

router.delete("/:id", deleteUser )


export default router