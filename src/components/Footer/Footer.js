import React from 'react';
import Subscribe from './Subscribe/Subscribe';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import SiteMap from './SiteMap/SiteMap';
import Copyright from './Copyright/Copyright';

const Footer = () => {
    return (
        <footer className={'main-footer'}>
            <Subscribe/>
            <div className={'social-networks__wrapper'}></div>
            <SocialNetworks/>
            <div className={'site-map__wrapper'}></div>
            <SiteMap/>
            <div className={'copyright__wrapper'}></div>
            <Copyright/>
        </footer>
    );
};

export default Footer;