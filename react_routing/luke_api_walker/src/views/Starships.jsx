import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from"axios"

const Starships = () => {
    const [starships, setStarships] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                console.log(response.data)
                setStarships(response.data)
            })
            .catch((err)=>{
                setError('https://img.search.brave.com/Ojg4jAtFo4cOgfBUBvphZ7-P3hRM9VN1Sf9-cNEhWDk/rs:fit:1123:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC40TzduLVdK/cjRiZHYtVXVrcUZK/RWJRSGFESSZwaWQ9/QXBp')
                console.log(err)
                setStarships(null)
            })
    },[id])

    return (
        <div>
            {starships ? (
                <div>
                    <h1>Starship name: {starships.name}</h1>
                    <h1>Starship model: {starships.model}</h1>
                    <h1>Starship manufacturer: {starships.manufacturer}</h1>
                    <h1>Cost in credits: {starships.cost_in_credits}</h1>
                    <h1>Starship length: {starships.length}</h1>
                    <h1>Starship class: {starships.starship_class}</h1>
                </div>
            ) : 
                    <img src={error} alt="Error"/>
            }
        </div>
    )
}

export default Starships
