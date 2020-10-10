require("dotenv").config()
const express = require("express")
const cors = require("cors")

const server = express()
const port = process.env.PORT || 3500

const authRouter = require("./routes/authRoute")
const projectRoutes = require("./routes/projectRoute")

server.use(express.json())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/projects", projectRoutes)

server.get("/", (req, res) => res.send({ message: "Welcome to the Sequelize Server" }))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

////web: npx sequelize db:migrate:all && npx sequelize db:seed:all