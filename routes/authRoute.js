const express = require("express")
const router = express.Router()
const db = require("../models")

router.post("/register", async (req, res) => {
    try {
        const user = await db.User.create(req.body)
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Unable to find users" })
    }
})

router.post("/login", async (req, res) => {
    try {
        const user = await db.User.find(req.body.id)
        res.staus(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "Unable to find users" })
    }
})

module.exports = router