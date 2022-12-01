const express = require('express');
require('dotenv').config();
const cors = require('cors')
const login = require('./controllers/login')
const stats = require('./controllers/stats')
const app = express();
const gameRoutes = require('./controllers/game')

const port = 8080

app.use(express.json())
app.use(cors())


app.use(login)
app.use('/stats',stats)
app.use('/play', gameRoutes)


app.listen(port, () => {
    console.log('Services are running...')
})
