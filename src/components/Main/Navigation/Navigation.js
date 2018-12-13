import React from 'react';

const Navigation = () => {
    return (
        <nav className={'main-content__navigation navigation'}>
            <div className={'navigation__list__wrapper-1'}></div>
            <ul className={'navigation__list'}>
                <li className={'navigation__item navigation__item_selected'}>
                    <a className={'navigation__link'} href="#">Одежда и аксессуары</a>
                </li>
                <li className={'navigation__item'}>
                    <a className={'navigation__link'} href="#">Обувь</a>
                </li>
                <li className={'navigation__item'}>
                    <a className={'navigation__link'} href="#">Украшения</a>
                </li>
                <li className={'navigation__item'}>
                    <a className={'navigation__link'} href="#">Красота и здоровье</a>
                </li>
                <li className={'navigation__item'}>
                    <a className={'navigation__link'} href="#">Товары для дома</a>
                </li>
                <li className={'navigation__item'}>
                    <a className={'navigation__link'} href="#">Товары для кухни</a>
                </li>
            </ul>
            <ul className={'navigation__select select'}>
                <li className={'select__item'}>
                    <a className={'navigation__link'} href="#">Женская одежда</a>
                </li>
                <li className={'select__item'}>
                    <a className={'navigation__link'} href="#">Мужская одежда</a>
                </li>
                <li className={'select__item'}>
                    <a className={'navigation__link'} href="#">Аксессуары</a>
                </li>
            </ul>
            <div className={'select__list__wrapper-1'}></div>
        </nav>
    );
};

export default Navigation;