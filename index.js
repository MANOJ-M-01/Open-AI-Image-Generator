const express = require('express')
const dotenv = require('dotenv').config()
const APP_PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/openai', require('./routes/open_ai_routes'))

app.get('*', function (req, res) {
    res.json({
        'message': 'Route not found'
    }, 404)
    res.end()
})

app.listen(APP_PORT, () => console.log(`APP Running on http://localhost:${APP_PORT}/`))