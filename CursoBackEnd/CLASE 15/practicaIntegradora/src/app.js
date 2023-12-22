import express from "express";
import mongoose from "mongoose";
import __dirname from "./utils.js";
//routes import
import userRoute from "./routes/usersRoute.js";




//server
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`))
const server = app.listen(PORT, ()=>{
    `El servidor funciona en el puerto: ${PORT}`
})
//mongoDB
const MONGO = "mongodb+srv://cristianpabloayala:<password>@cristian14.80agiir.mongodb.net/CoderPracticaIntegradora"
const connection = mongoose.connect(MONGO)


//routes
app.use("/api/users",userRoute)