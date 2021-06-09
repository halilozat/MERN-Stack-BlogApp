import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app = express()



app.listen(process.env.PORT, () => {
    console.log(`Server ${process.env.PORT}. portta yayında!`);
})