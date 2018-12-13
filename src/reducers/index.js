import {combineReducers} from 'redux';
import cart from './cart'
import promoCode from './promoCode'

const reducer = combineReducers({cart,promoCode});

export default reducer