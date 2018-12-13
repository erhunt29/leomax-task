import React from 'react';
import logo from '../../../images/logo_shop.png'
import user from '../../../images/user.png'
import cartImage from '../../../images/cart.png'
import {units} from '../../../helpers/helpers'
import connect from "react-redux/es/connect/connect";


const SecondLine = (props) => {
    const {cart} = props;
    let num = 0;
    cart.forEach(item => num = num + item.counter);

    const cases = {nom: 'товар', gen: 'товара', plu: 'товаров'};
    const label = units(num,cases);
    return (
        <div className={'header__second-line second-line'}>
            <div className={'second-line__wrapper-1'}>
              <div className={'second-line__logo logo'}>
                  <img className={'logo__image'} src={logo} alt=""/>
                  <span className={'logo__label'}>New Look</span>
              </div>
                  <input className={'second-line__search'} type="text" placeholder={'Поиск по сайту'}/>
            </div>
            <div className={'second-line__wrapper-2'}>
                <div className={'second-line__search-mobile'}></div>
                <div className={'second-line__user user'}>
                    <img className={'user__image'} src={user} alt=""/>
                    <span className={'user__name'}>Анастасия</span>
                </div>
                <div className={'second-line__cart cart'}>
                    <img className={'cart__image'} src={cartImage} alt=""/>
                    <div className={'second-line__wrapper-3'}>
                        <p className={'cart__label'}>В корзине:</p>
                        <p className={'cart_counter'}>{num} <span className={'counter__label'}>{label}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect((store)=>({
    cart: store.cart,
}))(SecondLine);



