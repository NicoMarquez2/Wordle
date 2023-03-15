const express = require('express')
const router = express.Router();
const { Word } = require('../models/word')

router.get('/', async (req, res) => {
    try {
        /*const wordId = getWord(1, 245)
        const myWord = await Word.findAll({
            where:{
                id: wordId
            }
        })*/
        const allWords = await Word.findAll()
        const words = allWords.map((element) => (element.dataValues.word))

        res.status(200).send(words)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router