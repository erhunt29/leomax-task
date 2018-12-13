import React from 'react';
import FirstLine from './FirstLine/FirstLine';
import SecondLine from './SecondLine/SecondLine';

const Header = () => {
    return (
            <header className={'main-header'}>
                <div className={'first-line__wrapper-1'}></div>
                <FirstLine/>
                <SecondLine/>
            </header>
    );
};

export default Header;