import mongoose from "mongoose"



mongoose.connect("mongodb://localhost:27017/DoneStreetDB");


let db = mongoose.connection;

export default db;