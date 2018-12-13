import React from 'react';
import sunglasses from '../../../images/sunglusses.png';
import hat from '../../../images/hat.png';
import dress1 from '../../../images/dress-1.png';
import dress2 from '../../../images/dress-2.png';


const AddToOrder = () => {
    return (
        <div className={'cart__add-to-order add-to-order'}>
            <h4 className={'add-to-order__header'}>Добавьте к вашему заказу</h4>
            <ul className={'add-to-order__list'}>
                <li className={'add-to-order__item'}>
                    <a className={'add-to-order__link'} href="#">
                        <img className={'add-to-order__image'} src={sunglasses} alt=""/>
                        <p className={'add-to-order__name'}>Солнечные очки зеленого цвета  в <br/> стиле ретро</p>
                        <p className={'add-to-order__price'}>2 450 руб.</p>
                    </a>
                </li>
                <li className={'add-to-order__item'}>
                    <a className={'add-to-order__link'} href="#">
                        <img className={'add-to-order__image'} src={hat} alt=""/>
                        <p className={'add-to-order__name'}>Шляпа</p>
                        <p className={'add-to-order__price'}>800 руб.</p>
                    </a>
                </li>
                <li className={'add-to-order__item'}>
                    <a className={'add-to-order__link'} href="#">
                        <img className={'add-to-order__image'} src={dress1} alt=""/>
                        <p className={'add-to-order__name'}>Платье-миди с расклешенной юбкой</p>
                        <p className={'add-to-order__price'}>2 450 руб.</p>
                    </a>
                </li>
                <li className={'add-to-order__item add-to-order__item_last'}>
                    <a className={'add-to-order__link'} href="#">
                        <img className={'add-to-order__image'} src={dress2} alt=""/>
                        <p className={'add-to-order__name'}>Платье-миди с расклешенной юбкой</p>
                        <p className={'add-to-order__price'}>2 450 руб.</p>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AddToOrder;