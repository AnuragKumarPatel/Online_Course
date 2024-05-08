const express=require('express')
const router=express.Router();

const{getdata}=require("../controler/getdata")
const{login}=require("../controler/login")
const{createdata}=require("../controler/controler");
// const{deletedata}=require("../controler/deltecontroler");

router.post("/createUser",createdata)
router.post("/login",login);
router.get("/getdata/:email",getdata);

module.exports=router;
