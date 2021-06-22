import { combineReducers } from 'redux'
import { productReducer , selectedProductReducer } from '../reducer/productReducer';


const reducers  = combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer
}); 

export default reducers;