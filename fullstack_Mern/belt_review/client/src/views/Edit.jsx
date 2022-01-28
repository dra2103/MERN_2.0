import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
    const history = useHistory()
    const {id} =useParams()
    const [title, setTitle] = useState('')
    const [salery, setSalery] = useState(0)
    const [company, setCompany] = useState('')
    const [remote, setRemote] = useState(false)
    const [errArray, setErrArray] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/job/update/${id}`)
        .then(res => {
            setTitle(res.data.title)
            setSalery(res.data.salery)
            setCompany(res.data.company)
            setRemote(res.data.remote)
        })
        .catch(err => {console.log(err)})
    }, [])
    
    const submitHandler = (e) =>{
        e.preventDefault()
        axios
            .put(`http://localhost:8000/job/update/${id}`, {
                title,
                salery,
                company,
                remote,
            })
            .then((res) => {
                history.push("/");
            })
            .catch((err) => {
                const errResponse = err.response.data.errors; // errResponse obj with keys
                let tempArr = [];
                for (const key of Object.keys(errResponse)) {
                    tempArr.push(errResponse[key].message);
                }
                setErrArray(tempArr);
            });
    }

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/job/delete/${id}`)
        .then(res => history.push('/'))
        .catch()
    }

    return (
        <div>
            <h1>Edit the Job</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Salery</label>
                    <input
                        type="text"
                        name="salery"
                        value={salery}
                        onChange={(e) => setSalery(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        name="remote"
                        checked={remote}
                        onChange={(e) => setRemote(!remote)}
                        className=""
                    />
                    <label className="form-check-label">Remote</label>
                </div>
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
                <button type="button" className="btn btn-primary" onClick={e=>history.push('/')}>
                    Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={deleteHandler}>Delete</button>
            </form>
            {errArray.map((err, i) => (
                <p key={i}>{err}</p>
            ))}
        </div>
    );
}

export default Edit

// get id from params params (impot, destructure params)
// use the id to wrap info from axios
// when loaded useEffects useState

// form (onSubmit , onChange)
// send info to backend
// redirect : useHistory
// succesful : redirect
// fail: get errors
