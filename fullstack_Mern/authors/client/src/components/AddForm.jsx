import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddForm = () => {

    const [name, setName] = useState("");
    const history = useHistory()
    const [errArr, setErrorArr] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res=>{
                setName("")
                history.push("/");
            })
            .catch(err=>{
                
                const errResponse = err.response.data.errors
                const errors = [];
                for(const key of Object.keys(errResponse)){
                    errors.push(errResponse[key].message)
                }
                setErrorArr(errors)
            })
    }

    return (
        <div>
            <form onSubmit= {onSubmitHandler}>
                <label><h4>Name:</h4></label>
                <input type="Text" onChange={(e)=>setName(e.target.value)} value={name}/>
                <button type ="button" onClick = {(e)=>{history.push("/")}} >Cancel</button>
                <button type ="submit" >Submit</button>
            </form>
            
            {
                errArr.map((err, i) =>(
                    <p key={i}>{err}</p>
                ))
                
            }
            
        </div>
    )
};

export default AddForm;