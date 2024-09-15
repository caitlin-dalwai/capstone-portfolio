import { getAllUsers, getUser, insertUser, updateUser, deleteUser,loginUser} from "../controller/usersCont.js";
import express from "express"
import { checkUser } from "../middleware/authenticate.js";

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUser)

router.post("/insert", insertUser)
router.post("/login",checkUser,loginUser)

router.patch("/:id", updateUser)

router.delete("/:id", deleteUser )


export default router