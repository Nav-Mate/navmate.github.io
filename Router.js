const express = require("express")
const router = express.Router()

router.get("/map",(req,res)=>{
  res.send("map")
})
router.get("/location",(req,res)=>{
  const ip = req.clientIp
  res.json({ip})
})
module.exports = router