import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'
import memoryRouter from './routers/memoryRouter.js'

dotenv.config()

const app = express()
//express'in json verileri parse edebilmesini sağlar.
app.use(express.json({limit:'30mb'}))
app.use(cors())

//localhost:5000/memories
app.use('/memories', memoryRouter)
app.use('/users', userRouter)

app.listen(process.env.PORT, () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log('connected to db'))
        .catch((err) => console.log(err))
})