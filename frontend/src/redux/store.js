import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { getproductReducers, getProductDetailsReducer } from './reducers/productReducers';


const reducer = combineReducers({
    cart: cartReducer,
    getProductDetails: getProductDetailsReducer,
    getProducts: getproductReducers,

})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))


)

export default store;