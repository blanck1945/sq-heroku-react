const express = require('express')
const router = express.Router()
const db = require("../models")

router.get('/all', async (req, res) => {
    try {
        const projects = await db.Project.findAll()
        res.status(200).json(projects)
    }
    catch (err) {
        console.log(err)
        res.json({ msg: "ERROR", error: err })
    }
})

module.exports = router;