import express from 'express'
import dotenv from "dotenv"
dotenv.config()
const app = express()
 

app.use('/', (req, res)=>{
    res.send("hello dheeraj saini ")
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is listen on port ${process.env.PORT}`)
})