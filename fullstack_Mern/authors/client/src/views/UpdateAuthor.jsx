import React from "react";
import UpdateForm from "../components/UpdateForm";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateAuthor = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Favorite Author</h1>
            <Link to={"/"}>
                <h4>Home</h4>
            </Link>
            <h2>Edit this author:</h2>
            <UpdateForm id={id} />
        </div>
    );
};

export default UpdateAuthor;
