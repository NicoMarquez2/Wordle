import React, { useEffect, useState } from "react";

const Stats = () => {
    const [userStats, setUserStats] = useState([])
    const url = "http://localhost:8080/stats"

    useEffect(()=>{
        getStats();

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
                    console.log(data)
                    setUserStats(data)} )
                console.log(userStats);
        }
    },[])

    return(
        <div className="stats">
            <h1>ESTADÍSTICAS</h1>
            <div>
                <p>Puntos: {userStats[0].points}</p>
                <p>Racha: {userStats[0].streak_points}</p>
            </div>
        </div>

    )
}

export default Stats