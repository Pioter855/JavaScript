const express = require('express')

const router = express.Router()

router.get('/',(req,res,next) => {
    res.send('<h1>Hello my firend for in server</h1>')
})



module.exports = router