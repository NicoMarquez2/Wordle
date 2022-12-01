import React, { useEffect, useState } from "react";
import GameTable from "./GameTable";
import Keyboard from "./Keyboard";
import Stats from "./Stats";

const Game = () => {

    const gameUrl = "http://localhost:8080/play"
    const [word, setWord] = useState("")

    const getWord = async () => {
        let myWord
        await fetch(gameUrl)
        .then((response) => response.json())
        .then((data) =>{
            myWord = data[0].word
            setWord(myWord)            
        })
        
    }

    useEffect(()=>{
        getWord()
    },[])

    const handleButton = () => {
        localStorage.removeItem("userToken")
    }

    return(
        <React.Fragment>
            <div className="logOutButton">
                <button onClick={handleButton}>Cerrar sesion</button>
            </div>
            <div className="game">             
                <GameTable word={word}></GameTable>
                <Keyboard></Keyboard>
                <Stats></Stats>
            </div>
        </React.Fragment>

    )
}

export default Game