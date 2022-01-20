import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const HeaderForm = () => {
    const [category, setCategory] = useState("")
    const [id,setId] = useState("")
    const history = useHistory()


    const submitHandler =(e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/`)
            .then(res=>{
                console.log(res.data)
                setCategory(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])

    return (
        <div>
            <h1>Search A Galaxy Far Far Away</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Search for:
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="planet">Planet</option>
                        <option value="people">People</option>
                        <option value="starships">Startships</option>
                    </select>
                    ID:
                    <input type="number" onChange={e =>setId(e.target.value)}/>
                    <button className='btn btn-success'> Search </button>
                </p>
            </form>
        </div>
    )
}

export default HeaderForm
