import {Router} from "express";
import userModel from "../models/userModel.js";
const router = Router();

router.get("/", async(req,res)=>{
    //conectar a la DB
    const users = await userModel.find();
    res.send({
        status: "success",
        message: users
    })
})

router.get("/:uid", async(req,res)=>{
    const id = req.params.uid;
    const user = await userModel.find({_id: id})
    res.send({
        status: "success",
        message: user
    })
})

router.post("/", async(req,res)=>{
    const {first_name, last_name, email} = req.body;
    if(!first_name || !last_name || !email ){
        return res.status(400).send({
            status: "error",
            message: "Valores incompletos"
        })
    }

    const user = {first_name, last_name, email}
    const result = await userModel.create(user);

    res.send({
        status: "success",
        message: result
    })
})

router.delete("/:uid", async(req,res)=>{

    const id = req.params.uid;
    const result = await userModel.deleteOne({_id:id})

    res.send({
        status: "success",
        message: result
    })
})

router.put("/:uid", async(req,res)=>{

    const id = req.params.uid;
    const {first_name, last_name, email} = req.body;
    const updatedUser = {first_name, last_name, email}
    const result = await userModel.updateOne({_id:id},{$set:updatedUser})

    res.send({
        status: "success",
        message: result
    })
})

export default router; //cuando la importe la puedo renombrar