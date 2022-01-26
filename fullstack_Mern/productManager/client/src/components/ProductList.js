import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    const { deleteFrom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                deleteFrom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {props.product.map( (product, i)=>
            <div key ={i}>
                <Link to={`/product/${product._id}`}> {product.title}</Link> | 
                | <Link to={"/product/" + product._id + "/edit"}>Edit</Link> |
                | <button onClick={(e) =>{deleteProduct(product._id)}}>Delete</button>
            </div>
            )}
        </div>
    )
}

export  default ProductList;