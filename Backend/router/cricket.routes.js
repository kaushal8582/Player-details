const express  = require("express")
const { addPlayer, findPlayer, updatePlayer } = require("../controllers/cricket.controller")

const router = express.Router()

router.post("/add-player",addPlayer)
router.post("/find-player",findPlayer)
router.post("/update-player",updatePlayer)

module.exports = router