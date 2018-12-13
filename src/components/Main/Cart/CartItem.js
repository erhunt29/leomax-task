import React from 'react';

const CartItem = (props) => {
    const {goodsItem,handleDecrement,handleIncrement,handleDeleteFromCart} = props;
    return (
        <div className={'table__goods-item goods-item'}>
            <div className={'table__cell-1'}>
                <img src={goodsItem.src}/>
            </div>
            <div  className={'table__cell-2'}>
                <p className={'goods-item__description'}>{goodsItem.description}</p>
                <p className={'goods-item__code'}>{'Код: ' + goodsItem.code}</p>
                <p className={'goods-item__size'}>{'Размер: ' + goodsItem.size}</p>
                <p className={'goods-item__color'}>{'Цвет: ' + goodsItem.color}</p>
            </div>
            <div  className={'table__cell-3'}>
                <span className={'goods-item__decrement'} onClick={handleDecrement(goodsItem.id)}>-</span>
                <span className={'goods-item__counter'}>{goodsItem.counter}</span>
                <span className={'goods-item__increment'} onClick={handleIncrement(goodsItem.id)}>+</span>
            </div>
            <div  className={'table__cell-4'}>
                <span className={'goods-item__price'}>{goodsItem.price + ' руб.'}</span>
            </div>
            <div  className={'table__cell-5'}>
                <div className={'goods-item__delete'} onClick={handleDeleteFromCart(goodsItem.id)}></div>
            </div>
        </div>
    );
};

export default CartItem;