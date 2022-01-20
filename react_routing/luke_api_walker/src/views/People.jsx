import React,{useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const People = () => {
    const [people, setPeople] = useState(null)
    const { id } = useParams();
    const [error,setError] = useState("")

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response.data)
                setPeople(response.data)
            })
            .catch((err) => {
                setError("https://img.search.brave.com/Ojg4jAtFo4cOgfBUBvphZ7-P3hRM9VN1Sf9-cNEhWDk/rs:fit:1123:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC40TzduLVdK/cjRiZHYtVXVrcUZK/RWJRSGFESSZwaWQ9/QXBp")
                console.log(err)
                setPeople(null);
            })
    }, [id])

    return (
        <div>
            {people ? (
                <div>
                    <h1>Name: {people.name}</h1>
                    <h3>Height: {people.height}</h3>
                    <h3>Mass: {people.mass}</h3>
                    <h3>Hair color: {people.hair_color}</h3>
                    <h3>Skin color: {people.skin_color}</h3>
                    <h3>Eye color: {people.eye_color}</h3>
                    <h3>Birth year: {people.birth_year}</h3>
                    <h3>Gender: {people.gender}</h3>
                </div>
            ) : 
                <img src={error} alt="Error" />
            }
        </div>
    )
}
export default People
