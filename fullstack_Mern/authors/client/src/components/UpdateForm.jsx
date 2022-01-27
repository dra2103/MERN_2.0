import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UpdateForm = (props) => {
    const [name, setName] = useState("");
    const history = useHistory();
    const { id } = props;
    const [errArr, setErrorArr] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => setName(res.data.name))
            .catch((err) => console.log(err.response));
    }, [id]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/update/${id}`, {
                name,
            })
            .then((res) => {
                setName("");
                history.push("/");
            })
            .catch((err) => {
                const errResponse = err.response.data.errors;
                const errors = [];
                for (const key of Object.keys(errResponse)) {
                    errors.push(errResponse[key].message);
                }
                setErrorArr(errors);
            });
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>
                    <h4>Name:</h4>
                </label>
                <input
                    type="Text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button
                    type="button"
                    onClick={(e) => {
                        history.push("/");
                    }}
                >
                    Cancel
                </button>
                <button type="submit">Submit</button>
                {errArr.map((err, i) => (
                    <p key={i}>{err}</p>
                ))}
            </form>
        </div>
    );
};

export default UpdateForm;
