import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    },[]);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                deleteFrom(productId)
            })
            .catch(err => console.log(err))
    }

    const deleteFrom = productId => {
        setProduct(product.filter(product => product._id != productId));
    }

    return (
        product ?
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
            <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
        </div>
            : <p> Whatever</p>

    )
}

export default Detail;