import React, { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';
import {selectedProduct , RemoveselectedProduct} from '../../redux/actions/productActions';
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './ProductDetails.scss';

const ProductDetails = () => {

    const product = useSelector(state => state.product)
    const {id,title,price,description,category,image} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log("productId-",productId)

    const fetchProductDetails = async () => {
        const resp = await 
                     axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err))
        
        dispatch(selectedProduct(resp.data))
    }

    useEffect(()=> {
        if(productId && productId!=='') fetchProductDetails();
        return () => {
            dispatch(RemoveselectedProduct())
        }
    },[productId])

    return (
        <section className="productDetail__wrapper">
            {
                Object.keys(product).length === 0?
                (
                    <Loader/>
                )
                :
                (
                    <div class="card">
                    <img class="card-img-top" src={image} width="250" height="250" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <h2 class="card-text">${price}</h2>
                        <h5 class="card-text">{category}</h5>
                        <a href="#" class="btn btn-primary">ADD to CART</a>
                    </div>
                    </div>
                )

            }

            
        </section>
    )
}
export default ProductDetails;