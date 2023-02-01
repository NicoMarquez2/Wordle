//const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router();
const { TOKEN_SECRET,verifyToken } = require('../middlewares/validate-jwt');
const { User } = require('../models/user')
const { UserStats } = require('../models/userStats')
const bcrypt = require('bcrypt')

async function createUserStats(mail){
    const userCrated = await User.findAll({
        where:{
            email: mail
        }
    })

    const newUserId = userCrated[0].dataValues.id

    const newUserStats= {
        user_id: newUserId,
        points: 0,
        streak: false,
        streak_points: 0
    }
    await UserStats.create(newUserStats)
}

router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)

    console.log("ENTRO POST REGISTER")

    const user = await User.findAll({
        where:{
            email: req.body.email
        }
    })

    console.log("BUSCO SI MAIL EXISTE")

    if(user [0]){
        console.log("ENTRO IF")
        res.status(400).send({message: "Ese email ya está registrado"})
    } else {
        console.log("AMSDNLKJASDNl")
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: password
        }
    
        await User.create(newUser)
        .then(()=>{
            createUserStats(req.body.email)
        })
        .then(()=>{res.status(204).send({message: "Usuario creado exitosamente"})})
    }   
})

router.post('/login', async (req, res) => {
    const user = await User.findAll({
        where:{
            email: req.body.email
        }
    })

    if(user[0]){
        const userId = user[0].dataValues.id
        const validPassword = await bcrypt.compare(req.body.password, user[0].dataValues.password)
    
        if(!validPassword){
            res.status(401).send({message: 'El usuario no es valido'})        
        }
        else{
            const token = jwt.sign({
                name: user.name,
                id: user.email
            }, TOKEN_SECRET)
    
            res.send({message:'Login exitoso',token, userId})
        }
    } else {
        res.status(402).send({message: 'Email no registrado'})
    }

})

module.exports = router