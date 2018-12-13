import React from 'react';
import Navigation from './Navigation/Navigation';
import Cart from "./Cart/Cart";
import AddToOrder from "./AddToOrder/AddToOrder";

const Main = () => {
    return (
        <main className={'main-content'}>
            <Navigation/>
            <Cart/>
            <AddToOrder/>
        </main>
    );
};

export default Main;