const express = require("express")
const db = require("../models")
const router = express.Router()
const db = require("../models/eventtype")

router.get("/", (res, req) => {
    try {
        const events = await db.EventType.find()
        res.status(200).json(events)
    }
    catch (err) {
        res.status(500).json({ message: "Unable to perform operation" })
    }
})

router.get("/single/:id", (req, res) => {
    const { id } = req.params
    try {
        const event = await db.findByPk(id)
        res.status(200).json(event)
    }
    catch (err) {
        res.status(500).json({ message: "Unable to perform operation" })
    }
})

module.exports = router