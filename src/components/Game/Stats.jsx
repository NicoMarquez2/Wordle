import React, { useEffect, useState } from "react";

const Stats = (props) => {
    const [userStats, setUserStats] = useState([])
    const url = "http://localhost:8080/stats"

    async function getStats() {
        await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'UserId': localStorage.getItem('userId')
            }
        })
            .then((response) => response.json())
            .then((data) =>{
                setUserStats([data[0].points, data[0].streak_points])} )
    }

    useEffect(()=>{
        getStats();
    },[])

    useEffect(()=>{
        getStats();
    },[props.refresh])

    return(
        <div className="stats">
            <h1>ESTADÍSTICAS</h1>
            <div>
                <p>Puntos: {userStats[0]}</p>
                <p>Racha: {userStats[1]}</p>
            </div>
        </div>

    )
}

export default Stats