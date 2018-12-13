import React, {Component} from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {applyPromo} from "../../../AC";

class Count extends Component {

    textInput = React.createRef();

    render() {
        const {sum, discount, total} = this.countAmount();
        return (
            <>
                <div className={'cart__count count'}>
                    <div className={'count__promo-code promo-code'}>
                        <h4 className={'promo-code__header'}>Есть промокод?</h4>
                        <form action="" className={'promo-code__form'}>
                            <input type="text" className={'promo-code__input'} ref = {this.textInput} placeholder={'Введите промокод'}/>
                            <button className={'promo-code__button'} onClick={this.handleApplyPromo}>Применить</button>
                        </form>
                    </div>
                    <div className={'count__amount amount'}>
                        <div className={'amount__sum-all sum-all'}>
                            <div className={'amount__label'}>Сумма заказа:</div>
                            <div className={'sum-all__value'}>{sum}</div>
                        </div>
                        {discount?
                            <div className={'amount__promo promo'}>
                                <div className={'promo__label'}>Промокод:</div>
                                <div className={'promo__value'}>{discount}</div>
                            </div>
                            : null}
                        <div className={'amount__total total'}>
                            <div className={'total__label'}>Всего:</div>
                            <div className={'total__value'}>{total}</div>
                        </div>
                    </div>
                </div>
                <div className={'cart__wrapper-2'}>
                    <button className={'cart__button'}>Оформить заказ</button>
                </div>
            </>

        );
    }

    handleApplyPromo = evt => {
        evt.preventDefault();
        const value = this.textInput.current.value;
        const {applyPromo} = this.props;
        applyPromo(value);
    };

    countAmount() {
        const {cart,promo} = this.props;
        let sum = 0;
        cart.forEach(cartItem => sum = sum + cartItem.counter*cartItem.price);

        let discount;
        promo.forEach(item => {
            if (item.isActive) discount = item.discount;
        });
        if (discount === undefined) discount = 0;

        let total = sum + discount;
        if (total < 0) total = 0;

        return {
            sum: sum,
            discount: discount,
            total: total
        }
    }
}

Count.propTypes = {};

export default connect((store)=>({
    cart: store.cart,
    promo: store.promoCode
}),{applyPromo})(Count);





