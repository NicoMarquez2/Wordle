import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import WordInput from "./WordInput";

const GameTable = (props) => {
    const validKeys = "qwertyuiopasdfghjklñzxcvbnm"
    const gameUrl = "http://localhost:8080/play"
    const points = {
        0: 10,
        1: 8,
        2: 4,
        3: 2,
        4: 1
    }

    const [table, setTable] =useState([
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]
    ])
    const [validWord, setValidWord] = useState()
    const [activeRow, setActiveRow] = useState(0)
    const [activePosition, setActivePosition] = useState(0)

    async function sendPoints(n){
        const data = {
            pointsGained: points.n,
            streak: true
        }
        await fetch(gameUrl,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    async function checkWord(userWord){
        const word = userWord
        const isValid = false

        console.log(word)
        await fetch(`${gameUrl}/all`,{
            method: "POST",
            body: JSON.stringify({word}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => isValid = data)

        console.log("ESTADO", isValid)
        if(isValid){
            return true
        } else {
            return false
        }
    }

    function handleGameOver(isWinner){
        if(isWinner){
            props.message("Felicidades, ganaste ")
            setActivePosition(undefined)
            setActiveRow(undefined)
            sendPoints(activeRow)
        } else {
            props.message(`Perdiste, la palabra era: ${props.word}`)
        }
    }

    const handleKeyDown = (e) => {
        e.preventDefault()
        const newTable =[...table]
        const found = validKeys.indexOf(e.key)
        if (e.key == "Enter") {
            handleSend()
        } else if (e.key == "Backspace") {
            if(activePosition == 0){
                newTable[activeRow][activePosition] = ""
                setTable(newTable)
            } else {
                newTable[activeRow][activePosition - 1] = ""
                setTable(newTable)
                setActivePosition(activePosition - 1)
            }
        } else if(found != -1){
            if(activePosition > 4) return
            newTable[activeRow][activePosition] = e.key.toUpperCase()
            setTable(newTable)
            setActivePosition(activePosition + 1)
        }
    }

    function handleSend(){
        const userWord = table[activeRow].toString().replace(/,/g,"").toLowerCase()
        console.log(userWord)
        console.log("CHECK", checkWord(userWord))
        if(checkWord(userWord)){
            console.log("PUSISTE UNA BIEN PA")
            if(activePosition < 5) return

            if(userWord === props.word){
                console.log("ESA")
                handleGameOver(true)
            }
            if(activeRow == 5){
                handleGameOver(false)
                setActiveRow(0)
            } else {
                setActiveRow(activeRow + 1)
                setActivePosition(0)
            }
        } else {
            console.log("PONE UNA PALABRA BIEN PA")
        }
    }

    return(
        <div className="table" onKeyDown={(e) => handleKeyDown(e)}>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={0} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={1} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={2} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={3} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={4} position={4}/>
            </div>
            <div className="inputRow">
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={0}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={1}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={2}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={3}/>
                <Letter table={table} word={props.word} activeRow={activeRow} activePosition={activePosition} attempt={5} position={4}/>
            </div>

            <button type="button" onClick={handleSend}>ENVIAR</button>
        </div>
    )
}

export default GameTable
