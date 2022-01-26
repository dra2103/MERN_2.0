import React from 'react'
import { Link } from 'react-router-dom';


const ProductList = (props) => {
    return (
        <div>
            {props.product.map( (product, i)=>
            <div key ={i}>
                <Link to={`/product/${product._id}`}> {product.title}</Link>
            </div>
            )}
        </div>
    )
}

export  default ProductList;