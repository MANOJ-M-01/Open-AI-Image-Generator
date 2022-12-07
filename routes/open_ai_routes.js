const express = require('express')
const router = express.Router()
const { generateImage } = require('../controller/openaiController')


router.post('/generate-image', generateImage)



module.exports = router