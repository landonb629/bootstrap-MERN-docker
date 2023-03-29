const express = require('express')
const app = express()
let cookieParser = require('cookie-parser')
let cors = require('cors')
app.use(cookieParser())
app.use(cors())
app.use(express.json())

const start = async () => { 
    try { 
        await connectDB()
        const port = 3032
        app.listen(port, ()=> { 
            console.log(`application listening on: ${port}`)
        })
    } catch(error) { 
        console.log(error)
    }

}

start()