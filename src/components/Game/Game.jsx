import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import TopStats from "../TopStats";
import GameTable from "./GameTable";
import Stats from "./Stats";

const Game = (props) => {

    const gameUrl = "http://localhost:8080/play"
    const [allWords, setAllWords] = useState("")
    const [word, setWord] = useState("")
    const [message, setMessage] = useState("")

    function randomIndex(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        const wordIdx = Math.floor(Math.random() * (max - min + 1) + min)
        return wordIdx
    }

    const getWords = async () => {
        let myWords
        let pickWord
        await fetch(gameUrl)
        .then((response) => response.json())
        .then((data) =>{
            myWords = data
            pickWord = myWords[randomIndex(0,244)]
            setWord(pickWord)
            setAllWords(myWords)            
        })
        
    }

    useEffect(()=>{
        getWords()
    },[])

    const handleButton = () => {
        localStorage.removeItem("userToken")
        props.setLogin()
    }

    return(
        <div className="game">
            <div className="logOutButton">
                <button onClick={handleButton}>Cerrar sesion</button>
            </div>
            <p className="message">{message}</p>
            <button onClick={() => console.log(word)}>MOSTRAR</button>
            <GameTable allWords={allWords} word={word} message={setMessage}></GameTable>
            <TopStats></TopStats>
            <Stats></Stats>
        </div>
    )
}

export default Game