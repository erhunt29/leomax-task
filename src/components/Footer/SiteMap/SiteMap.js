import React from 'react';
import logo from '../../../images/logo_shop_black_white.png'

const SiteMap = () => {
    return (
        <div className={'main-footer__site-map site-map'}>
            <img className={'site-map__logo'} src={logo} alt=""/>
            <div className={'site-map__numbers numbers'}>
                <p className={'numbers__main'}>8 (800) 500-75-55<sup>*</sup></p>
                <p className={'numbers__remark'} ><sup>*</sup>Бесплатный звонок по всей России</p>
                <p className={'numbers__extra'}>8 (495) 733-96-03</p>
            </div>
            <div className={'site-map__links site-map__katalog'}>
                <strong className={'site-map__list-header'}><a className={'site-map__link-header'} href="#">Каталог товаров</a></strong>
                <ul className={'site-map__list'}>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Одежда и аксессуары</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Обувь</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Украшения</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Красота и здоровье</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Товары для дома, дачи <br/> и отдыха</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Товары для кухни</a></li>
                </ul>
            </div>
            <div className={'site-map__links site-map__order'}>
                <strong className={'site-map__list-header'}><a className={'site-map__link-header'} href="#">Заказ</a></strong>
                <ul className={'site-map__list'}>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Оплата и доставка</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Возврат</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Помощь</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Благотворительный Фонд <br/> Константина Хабенского</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Гарантия на <br/> дополнительное <br/> обслуживание товара</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Пользовательское <br/> соглашение</a></li>
                </ul>
            </div>
            <div className={'site-map__links site-map__shop'}>
                <strong className={'site-map__list-header'}><a className={'site-map__link-header'} href="#">Shop24</a></strong>
                <ul className={'site-map__list'}>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Смотреть прямой эфир</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Расписание передач</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Акции</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Личный кабинет</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Поиск и карта сайта</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Карта брендов</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Обратная связь</a></li>
                </ul>
            </div>
            <div className={'site-map__links site-map__information'}>
                <strong className={'site-map__list-header'}><a className={'site-map__link-header'} href="#">Информация</a></strong>
                <ul className={'site-map__list'}>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">О канале</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Сотрудничество</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Покупайте с нами!</a></li>
                    <li className={'site-map__list-item'}><a className={'site-map__link'} href="#">Контакты</a></li>
                </ul>
            </div>

        </div>
    );
};

export default SiteMap;