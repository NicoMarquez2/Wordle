import React, { useEffect, useState } from "react";
import Letter from "./Letter";
import WordInput from "./WordInput";

const GameTable = (props) => {
    const validKeys = "qwertyuiopasdfghjklñzxcvbnm"
    const gameUrl = "http://localhost:8080/play"
    const statsUrl = "http://localhost:8080/stats"
    const points = {
        "0": 10,
        "1": 8,
        "2": 4,
        "3": 2,
        "4": 1
    }

    const [table, setTable] =useState([
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""]
    ])

    const [activeRow, setActiveRow] = useState(0)
    const [activePosition, setActivePosition] = useState(0)

    async function sendPoints(n){
        const row = n

        const data = {
            pointsGained: points[row],
            streak: true
        }
        await fetch(statsUrl,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'userId': localStorage.getItem('userId')
            },
            body: JSON.stringify(data)
        })
    }

    function handleGameOver(isWinner){
        if(isWinner){
            props.message("Felicidades, ganaste ")
            sendPoints(activeRow)
            setActivePosition(undefined)
            setActiveRow(undefined)
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
        if (userWord.length != 5) return 
        if(props.allWords.includes(userWord)){
            props.message("")
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
            props.message("La palabra no se encuentra en la lista")
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
