const express = require('express')
const router = express.Router();
const { Word } = require('../models/word')

function getWord(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    const wordId = Math.floor(Math.random() * (max - min + 1) + min)
    return wordId
}

router.get('/', async (req, res) => {
    try {
        const wordId = getWord(1, 245)
        const myWord = await Word.findAll({
            where:{
                id: wordId
            }
        })
        res.status(200).send(myWord)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/all', async (req, res) => {
    try {
        const word = req.body.word
        const allWords = await Word.findAll()
    
        const words = allWords.map((element) => (element.dataValues.word))
    
        //console.log("ASDASNS",words.find(element => element == word))
    
        if(words.includes(word)){
            res.status(200).send(true)
        } else {
            res.status(200).send(false)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router