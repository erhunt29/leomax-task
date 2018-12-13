import React, {Component} from 'react';
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import Count from './Count'
// import PropTypes from 'prop-types';


import {connect} from 'react-redux';
import {deleteItem} from "../../../AC/index";
import {incrementItem} from "../../../AC/index";
import {decrementItem} from "../../../AC/index";

class Cart extends Component {

    render() {
        const {cart} = this.props;
        return (
            <div className={'main-content__cart'}>
                <div className={'cart__wrapper-1'}>
                    <h3 className={'cart__header'}>{cart.length? 'Ваша корзина' : 'Ваша корзина пуста'}</h3>
                </div>
                <div className={'cart__table table'} >
                        {cart.length? <CartHeader/> : null}
                        {cart.map(goodsItem =>(
                            <CartItem
                                key = {goodsItem.id}
                                goodsItem = {goodsItem}
                                handleDeleteFromCart = {this.handleDeleteFromCart}
                                handleIncrement = {this.handleIncrement}
                                handleDecrement = {this.handleDecrement}
                            />) )}
                </div>
                {cart.length? <Count/> : null}
            </div>
        );
    }

    handleDeleteFromCart = (id) => () => {
        const {deleteItem} = this.props;
        deleteItem(id);
    };

    handleIncrement = (id) => () => {
        const {incrementItem} = this.props;
        incrementItem(id);
    };

    handleDecrement = (id) => () => {
        const {decrementItem} = this.props;
        decrementItem(id);
    };


}

// Cart.propTypes = {};

export default connect((store)=>({
    cart: store.cart,
    promo: store.promoCode
}),{deleteItem, incrementItem, decrementItem})(Cart);