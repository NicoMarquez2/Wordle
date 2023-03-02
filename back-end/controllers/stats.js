const express = require('express')
const router = express.Router();
const { UserStats } = require('../models/userStats')
const { User } = require('../models/user');
const sequelize = require('../infraestructure/db');

router.get('/', async (req, res) => {
    const userId = req.get("userId")
    const stats = await UserStats.findAll({
        where: {
            user_id: userId
        }
    })
    res.status(201).send(JSON.stringify(stats))
})

router.get('/all', async (req, res) => {
    const stats = await sequelize.query(
        "SELECT name, points FROM user_stats JOIN users ON user_stats.user_id = users.id"
    )
    res.status(200).send(JSON.stringify(stats[0]))
})

module.exports = router
//const userId = req.get("userId")