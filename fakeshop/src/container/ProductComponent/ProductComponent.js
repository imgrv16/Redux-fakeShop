import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import './ProductComponent.scss';

const ProductComponent = (props) => {

    let {id,title,price,description,category,image} = props.productData;
    return(
        <section className="productComp__wrapper">           
         <div class="cards-list">
             <Link to = {`/product/${id}`}>
                <div class="card">
                        <div class="card_image"> <img src={image} /> </div>
                        <div class="card_title title-white">
                            <p>{title}</p>
                            <p>$ {price}</p>
                            <p>{category}</p>

                        </div>
                </div>
        </Link>
        </div>
        </section>
    )
}
export default ProductComponent;