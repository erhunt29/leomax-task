import React from 'react';

const CartHeader = () => {
    return (
        <div className={'table__header'}>
            <div className={'table__cell-1'}>Товар</div>
            <div className={'table__cell-2'} >Описание</div>
            <div className={'table__cell-3'}>Количество</div>
            <div className={'table__cell-4'}>Цена</div>
            <div className={'table__cell-5'}>Удалить</div>
        </div>
    );
};

export default CartHeader;