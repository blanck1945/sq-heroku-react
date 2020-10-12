const express = require('express')
const router = express.Router()
const db = require("../models")

router.get('/projects/all', async (req, res) => {
    try {
        const projects = await db.Project.findAll()
        res.status(200).json(projects)
    }
    catch (err) {
        console.log(err)
        res.json({ msg: "ERROR", error: err })
    }
})

router.get('/techs/all', async (req, res) => {
    try {
        const techs = await db.Tech.findAll()
        res.status(200).json(techs)
    }
    catch (err) {
        console.log(err)
        res.json({ msg: "ERROR", error: err })
    }
})

module.exports = router;