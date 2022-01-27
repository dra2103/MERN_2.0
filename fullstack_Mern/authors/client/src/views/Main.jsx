import React, { useState, useEffect } from "react";
import axios from "axios";
import Deletebutton from "../components/DeleteButton";
import UpdateButton from "../components/UpdateButton";
import { Link } from "react-router-dom";

const Main = () => {
    const [author, setAuthor] = useState(null);
    const [refresh, setRefresh] = useState(false);

    const reloadList = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then((res) => setAuthor(res.data))
            .catch((err) => console.log(err.response));
    }, [refresh]);

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to={"/new"}>Add an author</Link>
            <h2>We have quotes by:</h2>

            {author ? (
                <table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Action Available</td>
                        </tr>
                    </thead>
                    <tbody>
                        {author.map((author, i) => (
                            <tr key={i}>
                                <td>{author.author}</td>
                                <td>
                                    <Link to={`/update/${author._id}`}>Edit</Link> 
                                    <UpdateButton id={author._id} />
                                </td>
                                <td>
                                    <Deletebutton id={author._id} reloadList={reloadList}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Main;
