const express = require('express')
const router = express.Router();
const { Word } = require('../models/word')

/*const sequelieze = new Sequelize('wordle', 'postgres', 'testing', {
    dialect: 'postgres',
});

const Word = sequelieze.define('words',{
    word: DataTypes.STRING,
},{
    createdAt: false,
    updatedAt: false,
    timestamps: false,
  }
)*/

function getWord(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    const wordId = Math.floor(Math.random() * (max - min + 1) + min)
    return wordId
}

router.get('/', async (req, res) => {
    const wordId = getWord(1, 15)
    const myWord = await Word.findAll({
        where:{
            id: wordId
        }
    })
    res.send(myWord)
})


module.exports = router