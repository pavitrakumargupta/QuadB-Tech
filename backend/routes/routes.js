const router=require("express").Router() 
const  { holdInfo }=require("../controller/holdInfoController")
router.get("/getInfo",holdInfo)   
module.exports=router; 