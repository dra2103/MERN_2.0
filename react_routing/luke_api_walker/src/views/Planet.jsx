import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Planet = () => {
    const [planet,setPlanet] = useState(null)
    const {id} =useParams()
    const [error,setError] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err => {
                setError("https://img.search.brave.com/Ojg4jAtFo4cOgfBUBvphZ7-P3hRM9VN1Sf9-cNEhWDk/rs:fit:1123:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC40TzduLVdK/cjRiZHYtVXVrcUZK/RWJRSGFESSZwaWQ9/QXBp")
                console.log(err)
                setPlanet(null)
            })
    }, [id])



    return (
        <div>
            {planet ? (
                <div>
                    <h1>Planet name: {planet.name}</h1>
                    <h3>Rotaion Period: {planet.rotation_period}</h3>
                    <h3>Orbital Period: {planet.orbital_period}</h3>
                    <h3>Climate: {planet.climate}</h3>
                    <h3>Planet name: {planet.terrain}</h3>
                    <h3>Planet name: {planet.population}</h3>
                    <h3>Planet name: {planet.surface_water}</h3>
                </div>
            ) : 
                <img src={error} alt="Error" />
            }
        </div>
    );
}

export default Planet
