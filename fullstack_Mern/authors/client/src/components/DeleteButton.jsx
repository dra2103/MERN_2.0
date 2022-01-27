import React from "react";
import axios from "axios";

const Deletebutton = (props) => {
    const { id, reloadList } = props;

    const clickHandler = () => {
        axios
            .delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then((res) => {
                reloadList();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <button onClick={clickHandler}>Delete</button>
        </div>
    );
};

export default Deletebutton;
