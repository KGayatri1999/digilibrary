const express = require("express")
const router = express.Router()

router.get('/',(req,res)=>{
    //res.send("Hello Gayatri")
    res.render('index')
});

module.exports = router


