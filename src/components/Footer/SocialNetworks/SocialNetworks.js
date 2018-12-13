import React from 'react';

const SocialNetworks = () => {
    return (
        <div className={'main-footer__social-networks social-networks'}>
            <p className={'social-networks__paragraph'}>SHOP24 в социальных сетях:</p>
            <ul className={'social-networks__list'}>
                <li><a className={'social-networks__item social-networks__vk'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__fb'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__ok'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__pinterest'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__pin-me'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__insta'} href="#"></a></li>
                <li><a className={'social-networks__item social-networks__youtube'} href="#"></a></li>
            </ul>
        </div>
    );
};

export default SocialNetworks;