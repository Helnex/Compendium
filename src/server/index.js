const express = require("express");
const cors = require('cors')
const cookieparser = require('cookie-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./router/index');
const errorMiddleware = require("./middlewares/error-middleware");


const app = express()

app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)
// app.get('/api', (req, res) => {
//     res.json({
//         message: 'Работает???'
//     })
// })

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => { console.log('server zapushen') })
    } catch (e) {
        console.log(e);
    }
}
start()