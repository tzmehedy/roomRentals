const express = require("express")
const cors = require("cors")

const port = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Room rental is coming")
})

app.listen(port, ()=>{
    console.log(`The port is running is ${port}`)
})