const  Info =require("../models/holdinfo");

module.exports.holdInfo=async(req,res)=>{
    try {
        const info =await Info.find()
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}