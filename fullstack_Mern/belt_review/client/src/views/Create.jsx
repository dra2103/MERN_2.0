import React,{useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title,setTitle] = useState("")
    const [salery,setSalery] = useState(0)
    const [company,setCompany] = useState("")
    const [remote,setRemote] = useState(false)
    const history = useHistory()
    const [errArray, setErrArray] = useState([])

    const submitHandler =(e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/job/new`, {title, salery, company, remote})
            .then(res => {history.push('/')
        })
            .catch(err => {
                const errResponse = err.response.data.errors  
                let tempArr = []
                for (const key of Object.keys(errResponse)){
                    tempArr.push(errResponse[key].message)
                }
                setErrArray(tempArr)
            })
    }

    return (
        <div>
            <h1>Creat a job</h1>
            <form onSubmit= {submitHandler}>
                <div className= 'form-group'>
                    <label>Title</label>
                    <input type='text' name='title' value={title} onChange={e=>setTitle(e.target.value)} className='form-control'/>
                </div>
                <div className= 'form-group'>
                    <label>Company</label>
                    <input type='text' name='company' value={company} onChange={e=>setCompany(e.target.value)} className='form-control'/>
                </div>
                <div className= 'form-group'>
                    <label>Salary</label>
                    <input type='text' name='salery' value={salery} onChange={e=>setSalery(e.target.value)} className='form-control'/>
                </div>
                <div className= 'form-check'>
                    <input type='checkbox' name='remote' checked={remote} onChange={e=>setRemote(!remote)} className='form-check-input'/>
                    <label className='form-check-label'>Remote</label>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
            {
                errArray.map((err, i)=>(
                    <p key={i}> {err} </p>
                ))
            }
        </div>
    )
}

export default Create

// form (onSubmit , onChange)
// send info to backend
// redirect : useHistory
// succesful : redirect
// fail: get errors
