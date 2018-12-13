import React from 'react';
import logoBlog from '../../../images/logo_звездный_блог.png'
import logoYoutube from '../../../images/youtube-logo.png'
import logoAir from '../../../images/in_air.png'

const FirstLine = () => {
    return (
        <div className={'header__first-line first-line'}>
            <div className={'first-line__wrap-1'}>
                <div className={'first-line__number'}> 8 (800) 500-75-55</div>
                <div className={'first-line__label'}> Бесплатный звонок по России</div>
            </div>
            <ul className={'first-line__blog-list blog-list'}>
                <li className={'blog-list__item'}>
                    <a className={'blog-list__link'} href='#'>
                        <img className={'blog-list__logo'} src={logoBlog} alt=""/>
                        <span className={'blog-list__label'}>Звездный блог</span>
                    </a>
                </li>
                <li className={'blog-list__item'}>
                    <a className={'blog-list__link'} href='#'>
                        <img className={'blog-list__logo'} src={logoYoutube} alt=""/>
                        <span className={'blog-list__label'}>Смотрите нас на YouTube</span>
                    </a>
                </li>
                <li className={'blog-list__item'}>
                    <a className={'blog-list__link'} href='#'>
                        <img className={'blog-list__logo'} src={logoAir } alt=""/>
                        <span className={'blog-list__label'}>Смотрите наш прямой эфир</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default FirstLine;