import express from 'express'
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
dotenv.config()
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
 

app.get('/health', (req, res)=>{
    res.status(200).json("this is the health page")
})

app.get('/books', (req, res)=>{
    res.status(200).json("this is the books app")
})


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/{*any}", (req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is listen on port ${process.env.PORT}`)
})