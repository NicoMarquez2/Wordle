import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import TopStats from "../TopStats";
import GameTable from "./GameTable";
import Stats from "./Stats";

const Game = (props) => {

    const gameUrl = "http://localhost:8080/play"
    const [word, setWord] = useState("")
    const [message, setMessage] = useState("")

    const getWord = async () => {
        let myWord
        await fetch(gameUrl)
        .then((response) => response.json())
        .then((data) =>{
            myWord = data[0].word
            console.log(myWord)
            setWord(myWord)            
        })
        
    }

    useEffect(()=>{
        getWord()
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
            <GameTable word={word} message={setMessage}></GameTable>
            <TopStats></TopStats>
            <Stats></Stats>
        </div>
    )
}

export default Game