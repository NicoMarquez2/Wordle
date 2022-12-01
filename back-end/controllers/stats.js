const express = require('express')
const router = express.Router();
const { UserStats } = require('../models/userStats')
const { User } = require('../models/user')

router.get('/', async (req, res) => {
    const userId = req.get("userId")
    const stats = await UserStats.findAll({
        where: {
            user_id: userId
        }
    })
    res.status(201).send(JSON.stringify(stats))
})

module.exports = router
//const userId = req.get("userId")