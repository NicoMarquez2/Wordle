const express = require('express')
const router = express.Router();
const { UserStats } = require('../models/userStats')
const { User } = require('../models/user');
const sequelize = require('../infraestructure/db');

router.get('/', async (req, res) => {
    try {
        const userId = req.get("userId")
        const stats = await UserStats.findAll({
            where: {
                user_id: userId
            }
        })
        res.status(201).send(JSON.stringify(stats))
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/all', async (req, res) => {
    try {
        const stats = await sequelize.query(
            "SELECT name, points FROM user_stats JOIN users ON user_stats.user_id = users.id"
        )
        res.status(200).send(JSON.stringify(stats[0]))
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {

    const userId = req.get("userId")

    await sequelize.query(       
        'UPDATE user_stats SET points = (SELECT points FROM user_stats WHERE user_id = ' + userId + ') + ' + req.body.pointsGained + ','+
        'streak = true,'+
        'streak_points = (SELECT streak_points FROM user_stats WHERE user_id = '+ userId +') + 1 '+
        'WHERE user_id ='+ userId
    )
    
})
module.exports = router
