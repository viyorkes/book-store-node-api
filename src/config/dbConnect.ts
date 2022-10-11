import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/DoneStreetDB')

const db = mongoose.connection


export default db
