import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'


const Details = () => {
    const {id} = useParams()
    const [job, setJob] = useState ('')

    useEffect (() => {
        axios.get('http://localhost:8000/job/'+id)
        .then(res =>setJob(res.data))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <h1>Job Details</h1>
            {
                job&&
                <>
                <h3> Title: {job.title}</h3>
                <h3> Salary: {job.salery}</h3>
                <h3> Company: {job.company}</h3>
                <h3> Remote: {job.remote?"yes":"no"}</h3>
                </>
            }
        </div>
    )
}

export default Details

// get id from params params (impot, destructure params)
// use the id to wrap info from axios
// when loaded useEffects useState
