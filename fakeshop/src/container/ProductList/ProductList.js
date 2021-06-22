import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import axios from 'axios';
import {setProducts} from '../../redux/actions/productActions';
import ProductComponent from '../ProductComponent/ProductComponent';
import Loader from '../Loader/Loader';
import './ProductList.scss';
const ProductList = () => {
    const [productData, setproductData] = useState([])
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await 
                         axios.get('https://fakestoreapi.com/products')
                              .catch((err) => {
                                    console.log("Error--->",err)
                                })
        setproductData(response.data);
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <section className="productList__wrapper">
            <div>
                <h1>Product List</h1>
                {
                    productData.length>0?
                    productData.map((prod,index) => {
                        return <ProductComponent key = {index} productData = {prod}/>
                    })
                    :
                    <div className="center__loader"><Loader/></div>

                }
            </div>
        </section>
    )
}
export default ProductList;