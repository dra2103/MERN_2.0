import React from "react";
import { useHistory } from "react-router-dom";

const UpdateButton = (props) => {
    const { id } = props;
    const history = useHistory();

    const clickHandler = (e) => {
        e.preventDefault();
        history.push(`/api/authors/update/${id}`);
    };

    return (
        <div>
            <button onClick={clickHandler}> Update</button>
        </div>
    );
};

export default UpdateButton;
